// SRP => A class should have only one reason to change
// DIP => A High level module should not depend on a Low Level module,
// instead both should depend on abstraction
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
/*
    Computer class:
    - Can input data
    - can store & retrieve data to memory
    - can process data
    - Can output data
    - can connect to WI-FI
    - can connect bluetooth device
*/
var InputDevice = /** @class */ (function () {
    function InputDevice() {
    }
    InputDevice.prototype.input = function () {
    };
    return InputDevice;
}());
var Keyboard = /** @class */ (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keyboard.prototype.input = function () {
        console.log("Inputing data from keyboard...");
    };
    return Keyboard;
}(InputDevice));
var Computer = /** @class */ (function () {
    function Computer() {
        this.category = "generic";
        this.internalMemory = {};
    }
    // Methods
    Computer.prototype.input = function (data) {
        this.inputDevice.input();
    };
    Computer.prototype.store = function (data) {
        console.log("Storing data into internal memory...");
        this.internalMemory = __assign(__assign({}, this.internalMemory), data);
    };
    Computer.prototype.retrieve = function (key) {
        console.log("Retrieving data from internal memory...");
        return this.internalMemory[key];
    };
    Computer.prototype.output = function (information) {
        console.log(information);
    };
    Computer.prototype.connectToWIFI = function () {
        console.log("Connecting to WI-FI");
    };
    Computer.prototype.connectToBluetoothDevice = function () {
        console.log("Connecting to Bluetooth Device...");
    };
    return Computer;
}());
// Computer Objects
var computer1 = new Computer();
function testComputer(computer) {
    computer.input({ "name": "senjack" });
    computer.retrieve("name");
    computer.output(computer.category);
    computer.connectToWIFI();
    computer.connectToBluetoothDevice();
}
testComputer(computer1);
