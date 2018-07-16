"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoaderActiontypes;
(function (LoaderActiontypes) {
    LoaderActiontypes["SHOWSHOWGENERAL"] = "[Loader] Show Show General";
    LoaderActiontypes["HIDESHOWGENERAL"] = "[Loader] Hide Show General";
    LoaderActiontypes["SHOWSHOWCHARTS"] = "[Loader] Show Show Carts";
    LoaderActiontypes["HIDEHOWCHARTS"] = "[Loader] Hide Show Carts";
    LoaderActiontypes["SHOWSHOWCOLLECTION"] = "[Loader] Show Show Collection";
    LoaderActiontypes["HIDESHOWCOLLECTION"] = "[Loader] Hide Show Collection";
    LoaderActiontypes["SHOWMOVIEGENERAL"] = "[Loader] Show Movie General";
    LoaderActiontypes["HIDEMOVIEGENERAL"] = "[Loader] Hide Movie General";
    LoaderActiontypes["SHOWMOVIEGRAPHS"] = "[Loader] Show Movie Graphs";
    LoaderActiontypes["HIDEMOVIEGRAPHS"] = "[Loader] Hide Movie Graphs";
    LoaderActiontypes["SHOWMOVIEPEOPLE"] = "[Loader] Show Movie People";
    LoaderActiontypes["HIDEMOVIEPEOPLE"] = "[Loader] Hide Movie People";
    LoaderActiontypes["SHOWMOVIESUSPICIOUS"] = "[Loader] Show Movie Suspicious";
    LoaderActiontypes["HIDEMOVIESUSPICIOUS"] = "[Loader] Hide Movie Suspicious";
})(LoaderActiontypes = exports.LoaderActiontypes || (exports.LoaderActiontypes = {}));
var HideLoaderShowGeneral = /** @class */ (function () {
    function HideLoaderShowGeneral(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.HIDESHOWGENERAL;
    }
    return HideLoaderShowGeneral;
}());
exports.HideLoaderShowGeneral = HideLoaderShowGeneral;
var ShowLoaderShowGeneral = /** @class */ (function () {
    function ShowLoaderShowGeneral(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.SHOWSHOWGENERAL;
    }
    return ShowLoaderShowGeneral;
}());
exports.ShowLoaderShowGeneral = ShowLoaderShowGeneral;
var ShowLoaderShowCharts = /** @class */ (function () {
    function ShowLoaderShowCharts(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.SHOWSHOWCHARTS;
    }
    return ShowLoaderShowCharts;
}());
exports.ShowLoaderShowCharts = ShowLoaderShowCharts;
var HideLoaderShowCharts = /** @class */ (function () {
    function HideLoaderShowCharts(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.HIDEHOWCHARTS;
    }
    return HideLoaderShowCharts;
}());
exports.HideLoaderShowCharts = HideLoaderShowCharts;
var ShowLoaderShowCollection = /** @class */ (function () {
    function ShowLoaderShowCollection(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.SHOWSHOWCOLLECTION;
    }
    return ShowLoaderShowCollection;
}());
exports.ShowLoaderShowCollection = ShowLoaderShowCollection;
var HideLoaderShowCollection = /** @class */ (function () {
    function HideLoaderShowCollection(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.HIDESHOWCOLLECTION;
    }
    return HideLoaderShowCollection;
}());
exports.HideLoaderShowCollection = HideLoaderShowCollection;
var ShowLoaderMovieGeneral = /** @class */ (function () {
    function ShowLoaderMovieGeneral(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.SHOWMOVIEGENERAL;
    }
    return ShowLoaderMovieGeneral;
}());
exports.ShowLoaderMovieGeneral = ShowLoaderMovieGeneral;
var HideLoaderMovieGeneral = /** @class */ (function () {
    function HideLoaderMovieGeneral(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.HIDEMOVIEGENERAL;
    }
    return HideLoaderMovieGeneral;
}());
exports.HideLoaderMovieGeneral = HideLoaderMovieGeneral;
var ShowLoaderMovieGraphs = /** @class */ (function () {
    function ShowLoaderMovieGraphs(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.SHOWMOVIEGRAPHS;
    }
    return ShowLoaderMovieGraphs;
}());
exports.ShowLoaderMovieGraphs = ShowLoaderMovieGraphs;
var HideLoaderMovieGraphs = /** @class */ (function () {
    function HideLoaderMovieGraphs(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.HIDEMOVIEGRAPHS;
    }
    return HideLoaderMovieGraphs;
}());
exports.HideLoaderMovieGraphs = HideLoaderMovieGraphs;
var ShowLoaderMoviePeople = /** @class */ (function () {
    function ShowLoaderMoviePeople(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.SHOWMOVIEPEOPLE;
    }
    return ShowLoaderMoviePeople;
}());
exports.ShowLoaderMoviePeople = ShowLoaderMoviePeople;
var HideLoaderMoviePeople = /** @class */ (function () {
    function HideLoaderMoviePeople(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.HIDEMOVIEPEOPLE;
    }
    return HideLoaderMoviePeople;
}());
exports.HideLoaderMoviePeople = HideLoaderMoviePeople;
var ShowLoaderMovieSuspicious = /** @class */ (function () {
    function ShowLoaderMovieSuspicious(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.SHOWMOVIESUSPICIOUS;
    }
    return ShowLoaderMovieSuspicious;
}());
exports.ShowLoaderMovieSuspicious = ShowLoaderMovieSuspicious;
var HideLoaderMovieSuspicious = /** @class */ (function () {
    function HideLoaderMovieSuspicious(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = LoaderActiontypes.HIDEMOVIESUSPICIOUS;
    }
    return HideLoaderMovieSuspicious;
}());
exports.HideLoaderMovieSuspicious = HideLoaderMovieSuspicious;
//# sourceMappingURL=actions.loader.js.map