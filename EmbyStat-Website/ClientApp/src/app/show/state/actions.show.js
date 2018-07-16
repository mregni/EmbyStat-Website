"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShowActionTypes;
(function (ShowActionTypes) {
    ShowActionTypes["LOAD_COLLECTIONS"] = "[Shows] Load Show Collections";
    ShowActionTypes["LOAD_COLLECTIONS_SUCCESS"] = "[Shows] Load Show Collections Success";
    ShowActionTypes["LOAD_STATS_GENERAL"] = "[Shows] Load General Show Stats";
    ShowActionTypes["LOAD_STATS_GENERAL_SUCCESS"] = "[Shows] Load General Show Stats Success";
    ShowActionTypes["LOAD_STATS_PERSON"] = "[Shows] Load Person Stats";
    ShowActionTypes["LOAD_STATS_PERSON_SUCCESS"] = "[Shows] Load Person Stats Success";
    ShowActionTypes["LOAD_GRAPHS"] = "[Shows] Load Show Graphs";
    ShowActionTypes["LOAD_GRAPHS_SUCCESS"] = "[Shows] Load Show Graphs Success";
    ShowActionTypes["CLEAR_GRAPHS_SUCCESS"] = "[Shows] Clear Show Graphs Success";
    ShowActionTypes["LOAD_COLLECTED_LIST"] = "[Shows] Load Collected List";
    ShowActionTypes["LOAD_COLLECTED_LIST_SUCCESS"] = "[Shows] Load Collected List Success";
})(ShowActionTypes = exports.ShowActionTypes || (exports.ShowActionTypes = {}));
var LoadShowCollectionsAction = /** @class */ (function () {
    function LoadShowCollectionsAction(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = ShowActionTypes.LOAD_COLLECTIONS;
    }
    return LoadShowCollectionsAction;
}());
exports.LoadShowCollectionsAction = LoadShowCollectionsAction;
var LoadShowCollectionsSuccessAction = /** @class */ (function () {
    function LoadShowCollectionsSuccessAction(payload) {
        this.payload = payload;
        this.type = ShowActionTypes.LOAD_COLLECTIONS_SUCCESS;
    }
    return LoadShowCollectionsSuccessAction;
}());
exports.LoadShowCollectionsSuccessAction = LoadShowCollectionsSuccessAction;
var LoadGeneralStatsAction = /** @class */ (function () {
    function LoadGeneralStatsAction(payload) {
        this.payload = payload;
        this.type = ShowActionTypes.LOAD_STATS_GENERAL;
    }
    return LoadGeneralStatsAction;
}());
exports.LoadGeneralStatsAction = LoadGeneralStatsAction;
var LoadGeneralStatsSuccessAction = /** @class */ (function () {
    function LoadGeneralStatsSuccessAction(payload) {
        this.payload = payload;
        this.type = ShowActionTypes.LOAD_STATS_GENERAL_SUCCESS;
    }
    return LoadGeneralStatsSuccessAction;
}());
exports.LoadGeneralStatsSuccessAction = LoadGeneralStatsSuccessAction;
var LoadGraphsAction = /** @class */ (function () {
    function LoadGraphsAction(payload) {
        this.payload = payload;
        this.type = ShowActionTypes.LOAD_GRAPHS;
    }
    return LoadGraphsAction;
}());
exports.LoadGraphsAction = LoadGraphsAction;
var LoadGraphsSuccessAction = /** @class */ (function () {
    function LoadGraphsSuccessAction(payload) {
        this.payload = payload;
        this.type = ShowActionTypes.LOAD_GRAPHS_SUCCESS;
    }
    return LoadGraphsSuccessAction;
}());
exports.LoadGraphsSuccessAction = LoadGraphsSuccessAction;
var ClearGraphsSuccesAction = /** @class */ (function () {
    function ClearGraphsSuccesAction(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = ShowActionTypes.CLEAR_GRAPHS_SUCCESS;
    }
    return ClearGraphsSuccesAction;
}());
exports.ClearGraphsSuccesAction = ClearGraphsSuccesAction;
var LoadPersonStatsAction = /** @class */ (function () {
    function LoadPersonStatsAction(payload) {
        this.payload = payload;
        this.type = ShowActionTypes.LOAD_STATS_PERSON;
    }
    return LoadPersonStatsAction;
}());
exports.LoadPersonStatsAction = LoadPersonStatsAction;
var LoadPersonStatsSuccessAction = /** @class */ (function () {
    function LoadPersonStatsSuccessAction(payload) {
        this.payload = payload;
        this.type = ShowActionTypes.LOAD_STATS_PERSON_SUCCESS;
    }
    return LoadPersonStatsSuccessAction;
}());
exports.LoadPersonStatsSuccessAction = LoadPersonStatsSuccessAction;
var LoadCollectedListAction = /** @class */ (function () {
    function LoadCollectedListAction(payload) {
        this.payload = payload;
        this.type = ShowActionTypes.LOAD_COLLECTED_LIST;
    }
    return LoadCollectedListAction;
}());
exports.LoadCollectedListAction = LoadCollectedListAction;
var LoadCollectedListSuccessAction = /** @class */ (function () {
    function LoadCollectedListSuccessAction(payload) {
        this.payload = payload;
        this.type = ShowActionTypes.LOAD_COLLECTED_LIST_SUCCESS;
    }
    return LoadCollectedListSuccessAction;
}());
exports.LoadCollectedListSuccessAction = LoadCollectedListSuccessAction;
//# sourceMappingURL=actions.show.js.map