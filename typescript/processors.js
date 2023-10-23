"use strict";
exports.__esModule = true;
exports.NVIDIA = exports.AMD = exports.Intel = void 0;
var Intel = /** @class */ (function () {
    function Intel() {
    }
    Intel.prototype.fetch = function (instructionId) {
        console.log("Instruction ID: " + instructionId);
        return "Do something.";
    };
    Intel.prototype.decode = function (instruction) {
        console.log("Instruction: " + instruction);
        return ["Action_1: Do A", "Action_2: Do B", "Action_3: Do C", "Action_4: Do D"];
    };
    Intel.prototype.execute = function (actions) {
        for (var action in actions) {
            console.log(action);
        }
        return true;
    };
    Intel.prototype.process = function (data, instructionId) {
        console.log("Processing data using an Intel Processor...");
        console.log("Data to be processed: " + data);
        console.log("Process starts now...");
        return this.execute(this.decode(this.fetch(instructionId)));
    };
    return Intel;
}());
exports.Intel = Intel;
var AMD = /** @class */ (function () {
    function AMD() {
    }
    AMD.prototype.fetch = function (instructionId) {
        console.log("Instruction ID: " + instructionId);
        return "Do something.";
    };
    AMD.prototype.decode = function (instruction) {
        console.log("Instruction: " + instruction);
        return ["Action_1: Do A", "Action_2: Do B", "Action_3: Do C", "Action_4: Do D"];
    };
    AMD.prototype.execute = function (actions) {
        for (var action in actions) {
            console.log(action);
        }
        return true;
    };
    AMD.prototype.process = function (data, instructionId) {
        console.log("Processing data using an AMD Processor...");
        console.log("Data to be processed: " + data);
        console.log("Process starts now...");
        return this.execute(this.decode(this.fetch(instructionId)));
    };
    return AMD;
}());
exports.AMD = AMD;
var NVIDIA = /** @class */ (function () {
    function NVIDIA() {
    }
    NVIDIA.prototype.fetch = function (instructionId) {
        console.log("Instruction ID: " + instructionId);
        return "Do something.";
    };
    NVIDIA.prototype.decode = function (instruction) {
        console.log("Instruction: " + instruction);
        return ["Action_1: Do A", "Action_2: Do B", "Action_3: Do C", "Action_4: Do D"];
    };
    NVIDIA.prototype.execute = function (actions) {
        for (var action in actions) {
            console.log(action);
        }
        return true;
    };
    NVIDIA.prototype.process = function (data, instructionId) {
        console.log("Processing data using an NVIDIA Processor...");
        console.log("Data to be processed: " + data);
        console.log("Process starts now...");
        return this.execute(this.decode(this.fetch(instructionId)));
    };
    return NVIDIA;
}());
exports.NVIDIA = NVIDIA;
