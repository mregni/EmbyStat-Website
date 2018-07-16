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
var actions_configuration_1 = require("./actions.configuration");
var INITIAL_STATE = {
    wizardFinished: true,
    accessToken: '',
    embyUserName: '',
    embyServerAddress: '',
    username: '',
    language: 'en-US',
    serverName: '',
    isLoaded: false,
    toShortMovie: 10,
    embyUserId: '',
    id: ''
};
function configurationReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case actions_configuration_1.ConfigurationActionTypes.LOAD_CONFIGURATION_SUCCESS:
            return __assign({}, state, { language: action.payload.language, wizardFinished: action.payload.wizardFinished, username: action.payload.username, accessToken: action.payload.accessToken, embyServerAddress: action.payload.embyServerAddress, embyUserName: action.payload.embyUserName, serverName: action.payload.serverName, embyUserId: action.payload.embyUserId, toShortMovie: action.payload.toShortMovie, id: action.payload.id, isLoaded: true });
        case actions_configuration_1.ConfigurationActionTypes.UPDATE_CONFIGURATION_SUCCESS:
            return __assign({}, state, { language: action.payload.language, wizardFinished: action.payload.wizardFinished, username: action.payload.username, accessToken: action.payload.accessToken, embyServerAddress: action.payload.embyServerAddress, embyUserName: action.payload.embyUserName, serverName: action.payload.serverName, embyUserId: action.payload.embyUserId, toShortMovie: action.payload.toShortMovie, id: action.payload.id, isLoaded: true });
        default:
            return state;
    }
}
exports.configurationReducer = configurationReducer;
var ConfigurationQuery;
(function (ConfigurationQuery) {
    ConfigurationQuery.getConfiguration = function (state) { return state.configuration; };
    ConfigurationQuery.getLoaded = function (state) { return state.configuration.isLoaded; };
})(ConfigurationQuery = exports.ConfigurationQuery || (exports.ConfigurationQuery = {}));
//# sourceMappingURL=reducer.configuration.js.map