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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var OutputDevice = /** @class */ (function () {
    function OutputDevice() {
    }
    return OutputDevice;
}());
var Monitor = /** @class */ (function (_super) {
    __extends(Monitor, _super);
    function Monitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Monitor.prototype.output = function () {
        console.log("Displays data on computer monitor");
    };
    return Monitor;
}(OutputDevice));
var Speaker = /** @class */ (function (_super) {
    __extends(Speaker, _super);
    function Speaker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Speaker.prototype.output = function () {
        console.log("Outputing sound from speaker");
    };
    return Speaker;
}(OutputDevice));
// Supertype / Contract
var Computer = /** @class */ (function () {
    // Methods
    function Computer(inputDevice, outputDevice) {
        this.inputDevice = inputDevice;
        this.outputDevice = outputDevice;
    }
    // Input
    Computer.prototype.input = function () {
        this.inputDevice.input();
    };
    Computer.prototype.setInputDevice = function (inputDevice) {
        this.inputDevice = inputDevice;
    };
    Computer.prototype.getInputDevice = function () {
        return this.inputDevice;
    };
    // output
    Computer.prototype.output = function () {
        this.outputDevice.output();
    };
    Computer.prototype.setOutputDevice = function (outputDevice) {
        this.outputDevice = outputDevice;
    };
    Computer.prototype.getOutputDevice = function () {
        return this.outputDevice;
    };
    // Process
    Computer.prototype.process = function () {
        console.log("process with Intel processor...");
    };
    // Store
    Computer.prototype.store = function (data) {
        console.log("Storing data into internal memory...");
    };
    // Retrieve
    Computer.prototype.retrieve = function (key) {
        console.log("Retrieving data from internal memory...");
    };
    return Computer;
}());
// Is-A Relationship LSP & ISP
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // We can add extra functionality to this class
    Desktop.prototype.balance = function () { };
    Desktop.prototype.connectToWIFI = function () {
        console.log('Connecting to wifi.');
    };
    Desktop.prototype.connectToBleatooth = function () {
        console.log('Connecting to Bluetooth.');
    };
    return Desktop;
}(Computer));
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // We can add extra functionality to this class   
    Laptop.prototype.fold = function () { };
    return Laptop;
}(Computer));
var Walltop = /** @class */ (function (_super) {
    __extends(Walltop, _super);
    function Walltop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // We can add extra functionality to this class   
    Walltop.prototype.hang = function () { };
    return Walltop;
}(Computer));
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // We can add extra functionality to this class   
    SmartPhone.prototype.screenTouch = function () { };
    return SmartPhone;
}(Computer));
var OldModelComputer = /** @class */ (function (_super) {
    __extends(OldModelComputer, _super);
    function OldModelComputer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // We can add extra functionality to this class
    OldModelComputer.prototype.legacyMethod = function () {
    };
    return OldModelComputer;
}(Computer));
// Computer Objects
var computer1 = new Computer(new Keyboard(), new Monitor());
// Change inpute device dynamically using a setter
computer1.setInputDevice(new Mouse());
computer1.setOutputDevice(new Speaker());
// Access the value of a private field using a getter
console.log(computer1.getInputDevice());
console.log(computer1.getOutputDevice());
// Tests
function testComputer(computer) {
    computer.input();
    computer.process();
    computer.store("any thing");
    computer.retrieve("name");
    computer.output();
}
testComputer(computer1);
