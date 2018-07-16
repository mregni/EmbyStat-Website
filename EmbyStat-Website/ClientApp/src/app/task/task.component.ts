import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskFacade } from './state/facade.task';
import { Subscription } from 'rxjs/Subscription';
import { Task } from './models/task';
import { HubConnection } from '@aspnet/signalr';
import { MatDialog } from '@angular/material';
import { TriggerDialogComponent } from './trigger-dialog/trigger-dialog.component';

import 'rxjs/Rx';
import * as moment from 'moment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {
  private hubConnection: HubConnection;
  private getTasksSub: Subscription;
  public tasks: Task[];
  public lines: string[] = [];

  constructor(private taskFacade: TaskFacade, public dialog: MatDialog) {
    this.hubConnection = new HubConnection('/tasksignal');

    this.hubConnection.on('ReceiveInfo', (data: Task[]) => {
      this.tasks = data;
    });

    this.hubConnection.on('ReceiveLog', (data: string) => {
      const now = moment().format('HH:mm:ss');
      data = now + ' - ' + data;

      if (this.lines.length >= 10) {
        this.lines.shift();
      }

      this.lines.push(data);
    });
  }

  ngOnInit() {
    this.getTasksSub = this.taskFacade.getTasks().subscribe(data => this.tasks = data);
    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started!');
      })
      .catch(err => console.log('Error while establishing connection :('));
  }

  public openDialog(task: Task): void {
    const dialogRef = this.dialog.open(TriggerDialogComponent, {
      width: '500px',
      data: { task: task }
    });

    dialogRef.afterClosed().subscribe((result: Task) => {
      if (result !== null) {
        this.taskFacade.updateTrigger(result).subscribe(data => {
          this.tasks = data;
        });
      } else {
        this.getTasksSub = this.taskFacade.getTasks().subscribe(data => this.tasks = data);
      }
    });
  }

  public hasHours(time: Date, to = moment.utc()): boolean {
    const from = moment.utc(time);
    to = this.convertToMoment(to);

    const milliseconds = to.diff(from);
    const duration = moment.duration(milliseconds);
    return Math.floor(duration.asHours()) > 0;
  }

  public hasMinutes(time: Date, to = moment.utc()): boolean {
    const from = moment.utc(time);
    to = this.convertToMoment(to);

    const milliseconds = to.diff(from);
    const duration = moment.duration(milliseconds);
    return Math.floor(duration.asMinutes()) % 60 > 0;
  }

  public hasSeconds(time: Date, to = moment.utc()): boolean {
    const from = moment.utc(time);
    to = this.convertToMoment(to);

    const milliseconds = to.diff(from);
    const duration = moment.duration(milliseconds);
    return (Math.floor(duration.asSeconds()) % 60 + 1) > 0;
  }

  public needsAnd(task: Task): boolean {
    return (this.hasHours(task.lastExecutionResult.endTimeUtc) ||
      this.hasMinutes(task.lastExecutionResult.endTimeUtc)) &&
      this.hasSeconds(task.lastExecutionResult.endTimeUtc);
  }

  public needsAndFor(task: Task): boolean {
    return (this.hasHours(task.lastExecutionResult.startTimeUtc, moment.utc(task.lastExecutionResult.endTimeUtc)) ||
      this.hasMinutes(task.lastExecutionResult.startTimeUtc, moment.utc(task.lastExecutionResult.endTimeUtc))) &&
      this.hasSeconds(task.lastExecutionResult.startTimeUtc, moment.utc(task.lastExecutionResult.endTimeUtc));
  }

  public needsComma(task: Task): boolean {
    return this.hasHours(task.lastExecutionResult.endTimeUtc) && this.hasMinutes(task.lastExecutionResult.endTimeUtc);
  }

  public needsCommaFor(task: Task): boolean {
    return this.hasHours(task.lastExecutionResult.startTimeUtc, moment.utc(task.lastExecutionResult.endTimeUtc))
      && this.hasMinutes(task.lastExecutionResult.startTimeUtc, moment.utc(task.lastExecutionResult.endTimeUtc));
  }

  public hasNoTime(task: Task): boolean {
    return !this.hasHours(task.lastExecutionResult.endTimeUtc) &&
           !this.hasMinutes(task.lastExecutionResult.endTimeUtc) &&
           !this.hasSeconds(task.lastExecutionResult.endTimeUtc);
  }

  public fireTask(id: string): void {
    this.taskFacade.fireTask(id);
  }

  private convertToMoment(value: any) {
    if (value instanceof moment) {
      return value;
    } else {
      return moment.utc(value);
    }
  }

  ngOnDestroy() {
    if (this.hubConnection !== undefined) {
      this.hubConnection.stop();
    }

    if (this.getTasksSub !== undefined) {
      this.getTasksSub.unsubscribe();
    }
  }
}
