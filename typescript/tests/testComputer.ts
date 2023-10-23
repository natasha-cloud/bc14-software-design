import Computer, { Laptop } from "../computer";
import { Keyboard, Mouse } from "../inputDevices";
import { Monitor, Projector } from "../outputDevices";

/**
Lets Declare an abstract computer objects.
Because its type is Abstract i.e. Computer,
it can polymorphically take-on all sub-types of computer, like Laptop, e.t.c.
**/
let computer1:Computer;

// Let our computer object now behave like a Laptop Computer
computer1 = new Laptop(new Keyboard(), new Monitor());

// Change input & output devices dynamically using a setters
computer1.setInputDevice(new Mouse());
computer1.setOutputDevice(new Projector());

// Access the value of a private field using a getter
computer1.getInputDevice().input();
computer1.getOutputDevice().output("OutputData: Bootcamp 14...");

// Tests
function testComputer(computer:Computer){
    computer.input();
    computer.process();
    computer.store("any thing");
    computer.retrieve("name");
    computer.output("OutputData: Bootcamp 14...");
}
testComputer(computer1);
