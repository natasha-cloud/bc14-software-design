"use strict";
// Create the implementor class
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBM = exports.Lenovo = exports.HP = exports.Dell = void 0;
// Concrete implementors
// 1. Dell
var Dell = /** @class */ (function () {
    function Dell() {
    }
    Dell.prototype.boot = function () {
        console.log("Dell Computer booting ...");
    };
    return Dell;
}());
exports.Dell = Dell;
// 2. Hp
var HP = /** @class */ (function () {
    function HP() {
    }
    HP.prototype.boot = function () {
        console.log("Hp Computer booting ...");
    };
    return HP;
}());
exports.HP = HP;
//3. Lenovo
var Lenovo = /** @class */ (function () {
    function Lenovo() {
    }
    Lenovo.prototype.boot = function () {
        console.log("Lenovo Computer booting ...");
    };
    return Lenovo;
}());
exports.Lenovo = Lenovo;
var IBM = /** @class */ (function () {
    function IBM() {
    }
    IBM.prototype.boot = function () {
        console.log("IBM Computer booting ...");
    };
    return IBM;
}());
exports.IBM = IBM;
