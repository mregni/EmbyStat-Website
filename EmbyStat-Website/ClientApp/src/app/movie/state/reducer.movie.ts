import { ApplicationState } from '../../states/app.state';

import { MovieStats } from '../models/movieStats';
import { PersonStats } from '../../shared/models/personStats';
import { MovieStore } from '../models/movieStore';
import { MovieGraphs } from '../models/movieGraphs';
import { SuspiciousMovies } from '../models/suspiciousMovies';
import { MovieActions, MovieActionTypes } from './actions.movie';

const INITIAL_STATE: MovieStore = {
  stats: new MovieStats(),
  personStats: new PersonStats(),
  collections: [],
  suspicious: new SuspiciousMovies(),
  graphs: new MovieGraphs()
};

export function MovieReducer(state: MovieStore = INITIAL_STATE, action: MovieActions) {
  switch (action.type) {
    case MovieActionTypes.LOAD_STATS_GENERAL_SUCCESS:
      return {
        ...state,
        stats: action.payload
      };
    case MovieActionTypes.LOAD_STATS_PERSON_SUCCESS:
      return {
        ...state,
        personStats: action.payload
      };
    case MovieActionTypes.LOAD_MOVIE_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload
      };
    case MovieActionTypes.LOAD_SUSPICIOUS_SUCCESS:
      return {
        ...state,
        suspicious: action.payload
      };
    case MovieActionTypes.LOAD_GRAPHS_SUCCESS:
      return {
        ...state,
        graphs: action.payload
      };
    case MovieActionTypes.CLEAR_GRAPHS_SUCCESS:
      return {
        ...state,
        graphs: new MovieGraphs()
      };
    default:
      return state;
  }
}

export namespace MovieQuery {
  export const getGeneralStats = (state: ApplicationState) => state.movies.stats;
  export const getCollections = (state: ApplicationState) => state.movies.collections;
  export const getPersonStats = (state: ApplicationState) => state.movies.personStats;
  export const getSuspicious = (state: ApplicationState) => state.movies.suspicious;
  export const getGraphs = (state: ApplicationState) => state.movies.graphs;
}
