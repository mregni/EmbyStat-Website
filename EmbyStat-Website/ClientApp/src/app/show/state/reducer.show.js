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
var showStats_1 = require("../models/showStats");
var showGraphs_1 = require("../models/showGraphs");
var personStats_1 = require("../../shared/models/personStats");
var actions_show_1 = require("./actions.show");
var INITIAL_STATE = {
    collections: [],
    showStats: new showStats_1.ShowStats(),
    graphs: new showGraphs_1.ShowGraphs(),
    personStats: new personStats_1.PersonStats(),
    showCollection: []
};
function ShowReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case actions_show_1.ShowActionTypes.LOAD_COLLECTIONS_SUCCESS:
            return __assign({}, state, { collections: action.payload });
        case actions_show_1.ShowActionTypes.LOAD_STATS_GENERAL_SUCCESS:
            return __assign({}, state, { showStats: action.payload });
        case actions_show_1.ShowActionTypes.LOAD_GRAPHS_SUCCESS:
            console.log(action.payload);
            return __assign({}, state, { graphs: action.payload });
        case actions_show_1.ShowActionTypes.CLEAR_GRAPHS_SUCCESS:
            return __assign({}, state, { graphs: new showGraphs_1.ShowGraphs() });
        case actions_show_1.ShowActionTypes.LOAD_STATS_PERSON_SUCCESS:
            return __assign({}, state, { personStats: action.payload });
        case actions_show_1.ShowActionTypes.LOAD_COLLECTED_LIST_SUCCESS:
            return __assign({}, state, { showCollection: action.payload });
        default:
            return state;
    }
}
exports.ShowReducer = ShowReducer;
var ShowQuery;
(function (ShowQuery) {
    ShowQuery.getCollections = function (state) { return state.shows.collections; };
    ShowQuery.getGeneralStats = function (state) { return state.shows.showStats; };
    ShowQuery.getGraphs = function (state) { return state.shows.graphs; };
    ShowQuery.getPersonStats = function (state) { return state.shows.personStats; };
    ShowQuery.getCollectedList = function (state) { return state.shows.showCollection; };
})(ShowQuery = exports.ShowQuery || (exports.ShowQuery = {}));
//# sourceMappingURL=reducer.show.js.map