"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.SecondaryMemory = exports.PrimaryMemory = void 0;
var PrimaryMemory = /** @class */ (function () {
    function PrimaryMemory() {
    }
    PrimaryMemory.prototype.store = function (data, key) {
        var _a;
        console.log('Storing Data in Primary Memory...');
        this.memory = __assign(__assign({}, this.memory), (_a = {}, _a[key] = data, _a));
        console.log('Data stored successfully!');
        return true;
    };
    PrimaryMemory.prototype.retrieve = function (key) {
        console.log('Retrieving Data from Primary Memory...');
        return this.memory[key];
    };
    return PrimaryMemory;
}());
exports.PrimaryMemory = PrimaryMemory;
var SecondaryMemory = /** @class */ (function () {
    function SecondaryMemory() {
    }
    SecondaryMemory.prototype.store = function (data, key) {
        var _a;
        console.log('Storing Data in Secondary Memory...');
        this.memory = __assign(__assign({}, this.memory), (_a = {}, _a[key] = data, _a));
        console.log('Data stored successfully!');
        return true;
    };
    SecondaryMemory.prototype.retrieve = function (key) {
        console.log('Retrieving Data from Secondary Memory...');
        return this.memory[key];
    };
    return SecondaryMemory;
}());
exports.SecondaryMemory = SecondaryMemory;
