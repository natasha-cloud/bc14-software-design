import Computer, { Laptop } from "../computer";
import { Keyboard, Mouse } from "../inputDevices";

/**
Lets Declare an abstract computer objects.
Because its type is Abstract i.e. Computer,
it can polymorphically take-on all sub-types of computer, like Laptop, e.t.c.
**/
let computer1:Computer;

// Let our computer object now behave like a Laptop Computer
computer1 = new Laptop(new Keyboard());

// Change inpute device dynamically using a setter
computer1.setInputDevice(new Mouse());

// Access the value of a private field using a getter
computer1.getInputDevice().input()

// Tests
function testComputer(computer:Computer){
    computer.input();
    computer.process();
    computer.store("any thing");
    computer.retrieve("name");
    computer.output("just");
}
testComputer(computer1);
