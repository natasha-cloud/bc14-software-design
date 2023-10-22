"use strict";
exports.__esModule = true;
var computer_1 = require("../computer");
var inputDevices_1 = require("../inputDevices");
/**
Lets Declare an abstract computer objects.
Because its type is Abstract i.e. Computer,
it can polymorphically take-on all sub-types of computer, like Laptop, e.t.c.
**/
var computer1;
// Let our computer object now behave like a Laptop Computer
computer1 = new computer_1.Laptop(new inputDevices_1.Keyboard());
// Change inpute device dynamically using a setter
computer1.setInputDevice(new inputDevices_1.Mouse());
// Access the value of a private field using a getter
computer1.getInputDevice().input();
// Tests
function testComputer(computer) {
    computer.input();
    computer.process();
    computer.store("any thing");
    computer.retrieve("name");
    computer.output("just");
}
testComputer(computer1);
