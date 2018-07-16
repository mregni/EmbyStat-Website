import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

import { MovieChartsService } from '../service/movie-charts.service';
import { MovieFacade } from '../state/facade.movie';
import { Collection } from '../../shared/models/collection';


@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {
  public collections$: Observable<Collection[]>;
  public selectedCollections: string[];

  public collectionsFormControl = new FormControl('', { updateOn: 'blur' });

  constructor(private movieFacade: MovieFacade, private movieChartsService: MovieChartsService) {
    this.collections$ = this.movieFacade.getCollections();

    this.collectionsFormControl.valueChanges.subscribe(data => {
      this.selectedCollections = data;
    });
  }

  ngOnInit() {

  }

  onTabChanged(event): void {
    if (event.index === 1) {
      this.movieChartsService.changeOpened(true);
    } else {
      this.movieChartsService.changeOpened(false);
    }
  }
}
