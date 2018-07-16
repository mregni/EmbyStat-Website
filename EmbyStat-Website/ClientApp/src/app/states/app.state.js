"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ngrx_store_freeze_1 = require("ngrx-store-freeze");
var environment_1 = require("../../environments/environment");
var reducer_configuration_1 = require("../configuration/state/reducer.configuration");
var reducer_plugin_1 = require("../plugin/state/reducer.plugin");
var reducer_server_1 = require("../server/state/reducer.server");
var reducer_movie_1 = require("../movie/state/reducer.movie");
var reducer_show_1 = require("../show/state/reducer.show");
var reducer_loader_1 = require("../shared/components/loader/state/reducer.loader");
exports.ROOT_REDUCER = {
    configuration: reducer_configuration_1.configurationReducer,
    plugins: reducer_plugin_1.pluginReducer,
    serverInfo: reducer_server_1.serverInfoReducer,
    movies: reducer_movie_1.MovieReducer,
    shows: reducer_show_1.ShowReducer,
    loading: reducer_loader_1.LoadingReducer
};
exports.META_REDUCERS = !environment_1.environment.production ? [ngrx_store_freeze_1.storeFreeze] : [];
//# sourceMappingURL=app.state.js.map