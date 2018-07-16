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
var actions_loader_1 = require("./actions.loader");
var INITIAL_STATE = {
    isShowGeneralLoading: false,
    isShowGraphsLoading: false,
    isShowCollectionLoading: false,
    isMovieGeneralLoading: false,
    isMovieGraphsLoading: false,
    isMoviePeopleLoading: false,
    isMovieSuspiciousLoading: false
};
function LoadingReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case actions_loader_1.LoaderActiontypes.HIDESHOWGENERAL:
            return __assign({}, state, { isShowGeneralLoading: false });
        case actions_loader_1.LoaderActiontypes.SHOWSHOWGENERAL:
            return __assign({}, state, { isShowGeneralLoading: true });
        case actions_loader_1.LoaderActiontypes.HIDEHOWCHARTS:
            return __assign({}, state, { isShowGraphsLoading: false });
        case actions_loader_1.LoaderActiontypes.SHOWSHOWCHARTS:
            return __assign({}, state, { isShowGraphsLoading: true });
        case actions_loader_1.LoaderActiontypes.HIDESHOWCOLLECTION:
            return __assign({}, state, { isShowCollectionLoading: false });
        case actions_loader_1.LoaderActiontypes.HIDESHOWCOLLECTION:
            return __assign({}, state, { isShowCollectionLoading: true });
        case actions_loader_1.LoaderActiontypes.HIDEMOVIEGENERAL:
            return __assign({}, state, { isMovieGeneralLoading: false });
        case actions_loader_1.LoaderActiontypes.SHOWMOVIEGENERAL:
            return __assign({}, state, { isMovieGeneralLoading: true });
        case actions_loader_1.LoaderActiontypes.HIDEMOVIEGRAPHS:
            return __assign({}, state, { isMovieGraphsLoading: false });
        case actions_loader_1.LoaderActiontypes.SHOWMOVIEGRAPHS:
            return __assign({}, state, { isMovieGraphsLoading: true });
        case actions_loader_1.LoaderActiontypes.HIDEMOVIEPEOPLE:
            return __assign({}, state, { isMoviePeopleLoading: false });
        case actions_loader_1.LoaderActiontypes.SHOWMOVIEPEOPLE:
            return __assign({}, state, { isMoviePeopleLoading: true });
        case actions_loader_1.LoaderActiontypes.HIDEMOVIESUSPICIOUS:
            return __assign({}, state, { isMovieSuspiciousLoading: false });
        case actions_loader_1.LoaderActiontypes.SHOWMOVIESUSPICIOUS:
            return __assign({}, state, { isMovieSuspiciousLoading: true });
        default:
            return state;
    }
}
exports.LoadingReducer = LoadingReducer;
var LoaderQuery;
(function (LoaderQuery) {
    LoaderQuery.isShowGeneralLoading = function (state) { return state.loading.isShowGeneralLoading; };
    LoaderQuery.isShowGraphsLoading = function (state) { return state.loading.isShowGraphsLoading; };
    LoaderQuery.isShowCollectionLoading = function (state) { return state.loading.isShowCollectionLoading; };
    LoaderQuery.isMovieGeneralLoading = function (state) { return state.loading.isMovieGeneralLoading; };
    LoaderQuery.isMovieGraphsLoading = function (state) { return state.loading.isMovieGraphsLoading; };
    LoaderQuery.isMoviePeopleLoading = function (state) { return state.loading.isMoviePeopleLoading; };
    LoaderQuery.isMovieSuspiciousLoading = function (state) { return state.loading.isMovieSuspiciousLoading; };
})(LoaderQuery = exports.LoaderQuery || (exports.LoaderQuery = {}));
//# sourceMappingURL=reducer.loader.js.map