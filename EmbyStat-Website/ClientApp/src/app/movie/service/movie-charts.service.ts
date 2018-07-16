import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class MovieChartsService {

  private opened = new BehaviorSubject<boolean>(false);
  open = this.opened.asObservable();

  constructor() { }

  changeOpened(open) {
    console.log(open);
    this.opened.next(open);
  }
}
