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
var Computer = /** @class */ (function () {
    function Computer() {
        this.category = "generic";
        this.internalMemory = {};
    }
    Computer.prototype.input = function (data) {
        console.log("Inputing data from keyboard...");
        this.store(data);
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
