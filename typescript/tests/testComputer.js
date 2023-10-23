"use strict";
exports.__esModule = true;
var computer_1 = require("../computer");
var inputDevices_1 = require("../inputDevices");
var outputDevices_1 = require("../outputDevices");
var processors_1 = require("../processors");
/**
Lets Declare an abstract computer objects.
Because its type is Abstract i.e. Computer,
it can polymorphically take-on all sub-types of computer, like Laptop, e.t.c.
**/
var computer1;
// Let our computer object now behave like a Laptop Computer
computer1 = new computer_1.Laptop(new inputDevices_1.Keyboard(), new processors_1.Intel(), new outputDevices_1.Monitor());
// Change input & output devices dynamically using a setters
computer1.setInputDevice(new inputDevices_1.Mouse());
computer1.setOutputDevice(new outputDevices_1.Projector());
// Access the value of a private field using a getter
// computer1.getInputDevice().input();
// computer1.getOutputDevice().output("OutputData: Bootcamp 14...");
// Tests
function testComputer(computer) {
    computer.input();
    computer.process("data to be processed", 918273645);
    computer.store("This is the data to store");
    computer.retrieve("This is the data being retrieved");
    computer.output("OutputData: Bootcamp 14...");
}
testComputer(computer1);
