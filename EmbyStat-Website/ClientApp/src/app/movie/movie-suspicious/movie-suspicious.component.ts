import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ConfigurationFacade } from '../../configuration/state/facade.configuration';
import { Configuration } from '../../configuration/models/configuration';

import { MovieFacade } from '../state/facade.movie';
import { LoaderFacade } from '../../shared/components/loader/state/facade.loader';

@Component({
  selector: 'app-movie-suspicious',
  templateUrl: './movie-suspicious.component.html',
  styleUrls: ['./movie-suspicious.component.scss']
})
export class MovieSuspiciousComponent implements OnInit, OnDestroy {
  public suspiciousDisplayedColumns = ['number', 'title', 'reason', 'linkOne', 'qualityOne',
    'dateCreatedOne', 'linkTwo', 'qualityTwo', 'dateCreatedTwo'];
  public suspiciousDataSource = new MatTableDataSource();

  public shortDisplayedColumns = ['number', 'title', 'duration', 'link' ];
  public shortDataSource = new MatTableDataSource();

  private duplicatesSub: Subscription;
  private configurationSub: Subscription;
  private configuration: Configuration;

  private _selectedCollections: string[];
  get selectedCollections(): string[] {
    return this._selectedCollections;
  }

  @Input()
  set selectedCollections(collection: string[]) {
    if (collection === undefined) {
      collection = [];
    }

    this._selectedCollections = collection;
    this.duplicatesSub = this.movieFacade.getDuplicates(collection).subscribe(data => {
      this.suspiciousDataSource.data = data.duplicates;
      this.shortDataSource.data = data.shorts;
    });
  }

  public isLoading$: Observable<boolean>;

  constructor(private movieFacade: MovieFacade,
    private configurationFacade: ConfigurationFacade,
    private loaderFacade: LoaderFacade) {
    this.configurationSub = configurationFacade.getConfiguration().subscribe(data => this.configuration = data);
  }

  ngOnInit() {
    this.isLoading$ = this.loaderFacade.isMovieSuspiciousLoading();
  }

  openMovie(id: string): void {
    window.open(`${this.configuration.embyServerAddress}/emby/web/itemdetails.html?id=${id}`, '_blank');
  }

  ngOnDestroy(): void {
    if (this.duplicatesSub !== undefined) {
      this.duplicatesSub.unsubscribe();
    }

    if (this.configurationSub !== undefined) {
      this.configurationSub.unsubscribe();
    }
  }

}
