"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pollenium_snowdrop_1 = require("pollenium-snowdrop");
var Sundrop = /** @class */ (function (_super) {
    __extends(Sundrop, _super);
    function Sundrop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parentSnowdrop = null;
        _this.parentHandleId = null;
        return _this;
    }
    Sundrop.prototype.setParentSnowdrop = function (parentSnowdrop) {
        var _this = this;
        if (this.parentSnowdrop) {
            this.parentSnowdrop.removeHandleById(this.parentHandleId);
        }
        this.parentSnowdrop = parentSnowdrop;
        this.parentHandleId = parentSnowdrop.addHandle(function (data) {
            _this.emit(data);
        });
    };
    return Sundrop;
}(pollenium_snowdrop_1.Snowdrop));
exports.Sundrop = Sundrop;
