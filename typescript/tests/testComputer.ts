{}
import Computer, { Laptop } from "../computer";
import { Keyboard, Mouse } from "../inputDevices";
import { PrimaryMemory, SecondaryMemory } from "../memory";
import { Monitor, Projector } from "../outputDevices";
import { AMD, Intel, NVIDIA } from "../processors";
import ComputerFacade, {Display, DVD, Speakers} from "../facade";


/**
Lets Declare an abstract computer objects.
Because its type is Abstract i.e. Computer,
it can polymorphically take-on all sub-types of computer, like Laptop, e.t.c.
**/
    let computer1:Computer;

// Let our computer object now behave like a Laptop Computer
    computer1 = new Laptop(new Keyboard(), new Intel(), new PrimaryMemory(), new Monitor());

// Change input & output devices dynamically using a setters
    computer1.setInputDevice(new Mouse());
    computer1.setProcessor(new AMD());
    computer1.setMemory(new SecondaryMemory());
    computer1.setOutputDevice(new Projector());

// Setting a movie System
    computer1.setMovieSystem(new ComputerFacade(new Display(), new DVD(), new Speakers()));
    



// Access the value of a private field using a getter
    computer1.getInputDevice().input();
    computer1.getProcessor().process("data to be processed", 192837465);
    computer1.getMemory().store("This is data in memory", "key1");
    console.log(computer1.getMemory().retrieve("key1"));
    computer1.getOutputDevice().output("OutputData: Bootcamp 14...");

// Test Computer basic functionalities i.e. Input, processing, storage, retrival, and output.
    function testComputer(computer:Computer){
        computer.input();
        computer.process("data to be processed", 918273645);
        computer.store("Also!, This is data in memory", "key2");
        console.log(computer.retrieve("key2"));
        computer.output("OutputData: Bootcamp 14...");
    }
    testComputer(computer1);


// Test movie System
let movieSytem = computer1.getMovieSystem()
movieSytem.watchMovie("The Chronicles of the Ground Breakers")

