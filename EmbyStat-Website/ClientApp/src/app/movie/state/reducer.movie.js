"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var movieStats_1 = require("../models/movieStats");
var personStats_1 = require("../../shared/models/personStats");
var movieGraphs_1 = require("../models/movieGraphs");
var suspiciousMovies_1 = require("../models/suspiciousMovies");
var actions_movie_1 = require("./actions.movie");
var INITIAL_STATE = {
    stats: new movieStats_1.MovieStats(),
    personStats: new personStats_1.PersonStats(),
    collections: [],
    suspicious: new suspiciousMovies_1.SuspiciousMovies(),
    graphs: new movieGraphs_1.MovieGraphs()
};
function MovieReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case actions_movie_1.MovieActionTypes.LOAD_STATS_GENERAL_SUCCESS:
            return __assign({}, state, { stats: action.payload });
        case actions_movie_1.MovieActionTypes.LOAD_STATS_PERSON_SUCCESS:
            return __assign({}, state, { personStats: action.payload });
        case actions_movie_1.MovieActionTypes.LOAD_MOVIE_COLLECTIONS_SUCCESS:
            return __assign({}, state, { collections: action.payload });
        case actions_movie_1.MovieActionTypes.LOAD_SUSPICIOUS_SUCCESS:
            return __assign({}, state, { suspicious: action.payload });
        case actions_movie_1.MovieActionTypes.LOAD_GRAPHS_SUCCESS:
            return __assign({}, state, { graphs: action.payload });
        case actions_movie_1.MovieActionTypes.CLEAR_GRAPHS_SUCCESS:
            return __assign({}, state, { graphs: new movieGraphs_1.MovieGraphs() });
        default:
            return state;
    }
}
exports.MovieReducer = MovieReducer;
var MovieQuery;
(function (MovieQuery) {
    MovieQuery.getGeneralStats = function (state) { return state.movies.stats; };
    MovieQuery.getCollections = function (state) { return state.movies.collections; };
    MovieQuery.getPersonStats = function (state) { return state.movies.personStats; };
    MovieQuery.getSuspicious = function (state) { return state.movies.suspicious; };
    MovieQuery.getGraphs = function (state) { return state.movies.graphs; };
})(MovieQuery = exports.MovieQuery || (exports.MovieQuery = {}));
//# sourceMappingURL=reducer.movie.js.map