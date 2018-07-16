"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MovieActionTypes;
(function (MovieActionTypes) {
    MovieActionTypes["LOAD_STATS_GENERAL"] = "[Movies] Load General Movie Stats";
    MovieActionTypes["LOAD_STATS_GENERAL_SUCCESS"] = "[Movies] Load General Movie Stats Success";
    MovieActionTypes["LOAD_MOVIE_COLLECTIONS"] = "[Movies] Load Movie Collections";
    MovieActionTypes["LOAD_MOVIE_COLLECTIONS_SUCCESS"] = "[Movies] Load Movie Collections Success";
    MovieActionTypes["LOAD_STATS_PERSON"] = "[Movies] Load Person Movie Stats";
    MovieActionTypes["LOAD_STATS_PERSON_SUCCESS"] = "[Movies] Load Person Movie Stats Success";
    MovieActionTypes["LOAD_SUSPICIOUS"] = "[Movies] Load Suspicious";
    MovieActionTypes["LOAD_SUSPICIOUS_SUCCESS"] = "[Movies] Load Suspicious Success";
    MovieActionTypes["LOAD_GRAPHS"] = "[Movies] Load Movie Graphs";
    MovieActionTypes["LOAD_GRAPHS_SUCCESS"] = "[Movies] Load Movie Graphs Success";
    MovieActionTypes["CLEAR_GRAPHS_SUCCESS"] = "[Movies] Clear Movie Graphs Succes";
})(MovieActionTypes = exports.MovieActionTypes || (exports.MovieActionTypes = {}));
var LoadGeneralStatsAction = /** @class */ (function () {
    function LoadGeneralStatsAction(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.LOAD_STATS_GENERAL;
    }
    return LoadGeneralStatsAction;
}());
exports.LoadGeneralStatsAction = LoadGeneralStatsAction;
var LoadGeneralStatsSuccessAction = /** @class */ (function () {
    function LoadGeneralStatsSuccessAction(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.LOAD_STATS_GENERAL_SUCCESS;
    }
    return LoadGeneralStatsSuccessAction;
}());
exports.LoadGeneralStatsSuccessAction = LoadGeneralStatsSuccessAction;
var LoadMovieCollectionsAction = /** @class */ (function () {
    function LoadMovieCollectionsAction(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = MovieActionTypes.LOAD_MOVIE_COLLECTIONS;
    }
    return LoadMovieCollectionsAction;
}());
exports.LoadMovieCollectionsAction = LoadMovieCollectionsAction;
var LoadMovieCollectionsSuccessAction = /** @class */ (function () {
    function LoadMovieCollectionsSuccessAction(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.LOAD_MOVIE_COLLECTIONS_SUCCESS;
    }
    return LoadMovieCollectionsSuccessAction;
}());
exports.LoadMovieCollectionsSuccessAction = LoadMovieCollectionsSuccessAction;
var LoadPersonStatsAction = /** @class */ (function () {
    function LoadPersonStatsAction(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.LOAD_STATS_PERSON;
    }
    return LoadPersonStatsAction;
}());
exports.LoadPersonStatsAction = LoadPersonStatsAction;
var LoadPersonStatsSuccessAction = /** @class */ (function () {
    function LoadPersonStatsSuccessAction(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.LOAD_STATS_PERSON_SUCCESS;
    }
    return LoadPersonStatsSuccessAction;
}());
exports.LoadPersonStatsSuccessAction = LoadPersonStatsSuccessAction;
var LoadSuspiciousAction = /** @class */ (function () {
    function LoadSuspiciousAction(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.LOAD_SUSPICIOUS;
    }
    return LoadSuspiciousAction;
}());
exports.LoadSuspiciousAction = LoadSuspiciousAction;
var LoadSuspiciousSuccessAction = /** @class */ (function () {
    function LoadSuspiciousSuccessAction(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.LOAD_SUSPICIOUS_SUCCESS;
    }
    return LoadSuspiciousSuccessAction;
}());
exports.LoadSuspiciousSuccessAction = LoadSuspiciousSuccessAction;
var LoadGraphsAction = /** @class */ (function () {
    function LoadGraphsAction(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.LOAD_GRAPHS;
    }
    return LoadGraphsAction;
}());
exports.LoadGraphsAction = LoadGraphsAction;
var LoadGraphsSuccessAction = /** @class */ (function () {
    function LoadGraphsSuccessAction(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.LOAD_GRAPHS_SUCCESS;
    }
    return LoadGraphsSuccessAction;
}());
exports.LoadGraphsSuccessAction = LoadGraphsSuccessAction;
var ClearGraphsSuccesAction = /** @class */ (function () {
    function ClearGraphsSuccesAction(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = MovieActionTypes.CLEAR_GRAPHS_SUCCESS;
    }
    return ClearGraphsSuccesAction;
}());
exports.ClearGraphsSuccesAction = ClearGraphsSuccesAction;
//# sourceMappingURL=actions.movie.js.map