"use strict";
exports.__esModule = true;
var computer_1 = require("../computer");
var inputDevices_1 = require("../inputDevices");
var memory_1 = require("../memory");
var outputDevices_1 = require("../outputDevices");
var processors_1 = require("../processors");
/**
Lets Declare an abstract computer objects.
Because its type is Abstract i.e. Computer,
it can polymorphically take-on all sub-types of computer, like Laptop, e.t.c.
**/
var computer1;
// Let our computer object now behave like a Laptop Computer
computer1 = new computer_1.Laptop(new inputDevices_1.Keyboard(), new processors_1.Intel(), new memory_1.PrimaryMemory(), new outputDevices_1.Monitor());
// Change input & output devices dynamically using a setters
computer1.setInputDevice(new inputDevices_1.Mouse());
computer1.setProcessor(new processors_1.AMD());
computer1.setMemory(new memory_1.SecondaryMemory());
computer1.setOutputDevice(new outputDevices_1.Projector());
// Access the value of a private field using a getter
computer1.getInputDevice().input();
computer1.getProcessor().process("data to be processed", 192837465);
computer1.getMemory().store("This is data in memory", "key1");
console.log(computer1.getMemory().retrieve("key1"));
computer1.getOutputDevice().output("OutputData: Bootcamp 14...");
// Test Computer basic functionalities i.e. Input, processing, storage, retrival, and output.
function testComputer(computer) {
    computer.input();
    computer.process("data to be processed", 918273645);
    computer.store("Also!, This is data in memory", "key2");
    console.log(computer.retrieve("key2"));
    computer.output("OutputData: Bootcamp 14...");
}
testComputer(computer1);
