"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Projector = exports.Monitor = void 0;
var OutputDevice = /** @class */ (function () {
    function OutputDevice() {
    }
    return OutputDevice;
}());
exports["default"] = OutputDevice;
var Monitor = /** @class */ (function (_super) {
    __extends(Monitor, _super);
    function Monitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Monitor.prototype.output = function (data) {
        console.log("=======================================");
        console.log("Outputing data on the Monitor Screen...");
        console.log("=======================================");
        console.log("Data:");
        console.log(data);
        console.log("=======================================");
        return true;
    };
    return Monitor;
}(OutputDevice));
exports.Monitor = Monitor;
var Projector = /** @class */ (function (_super) {
    __extends(Projector, _super);
    function Projector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Projector.prototype.output = function (data) {
        console.log("=======================================");
        console.log("Outputing data on a Projection...");
        console.log("=======================================");
        console.log("Data:");
        console.log(data);
        console.log("=======================================");
        return true;
    };
    return Projector;
}(OutputDevice));
exports.Projector = Projector;
