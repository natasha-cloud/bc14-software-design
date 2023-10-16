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
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouse.prototype.input = function () {
        console.log("Inputing data from Mouse...");
    };
    return Mouse;
}(InputDevice));
var Computer = /** @class */ (function () {
    // Methods
    function Computer(inputDevice) {
        this.inputDevice = inputDevice;
    }
    Computer.prototype.input = function () {
        this.inputDevice.input();
    };
    Computer.prototype.setInputDevice = function (inputDevice) {
        this.inputDevice = inputDevice;
    };
    Computer.prototype.getInputDevice = function () {
        return this.inputDevice;
    };
    return Computer;
}());
// Computer Objects
var computer1 = new Computer(new Keyboard());
// Change inpute device dynamically using a setter
computer1.setInputDevice(new Mouse());
computer1.setInputDevice(new Keyboard());
// Access the value of a private field using a getter
computer1.setInputDevice(new Mouse());
console.log(computer1.getInputDevice());
function testComputer(computer) {
    computer.input();
    // computer.retrieve("name");
    // computer.output(computer.category);
    // computer.connectToWIFI();
    // computer.connectToBluetoothDevice();
}
testComputer(computer1);
