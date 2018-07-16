"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListToQueryParam = /** @class */ (function () {
    function ListToQueryParam() {
    }
    ListToQueryParam.convert = function (name, list) {
        var params = '?';
        list.forEach(function (item) { return params += name + '=' + item + '&'; });
        return params.slice(0, -1);
    };
    return ListToQueryParam;
}());
exports.ListToQueryParam = ListToQueryParam;
//# sourceMappingURL=listToQueryParam.js.map