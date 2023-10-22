import { BluetoothSupportedDevice } from "./bluetooth";
import InputDevice, {Keyboard, Mouse} from "./inputDevices"
import { WiFiSupportedDevice } from "./WiFi";


/**
The Responsibility of this Computer class now is to control other Peripherals.
Hence after implementing all the S.O.L.I.D Principles, 
the computer class now is a controller class.
And control is the only rason why Coputer can change.
**/
class Computer{
    // Fields
        // public name: string;
        // public brand: string;
        // public model: string;
        // public category: string = "generic";
        // public internalMemory = {}

    private inputDevice:InputDevice;

    // Methods
    constructor(inputDevice:InputDevice){
        this.inputDevice = inputDevice
    }

    // Input
    input(){
       this.inputDevice.input();
    }

    setInputDevice(inputDevice:InputDevice){
        this.inputDevice = inputDevice;
    }

    getInputDevice(){
        return this.inputDevice
    }

    // Process
    process(){
        console.log("process with Intel processor...")
     }
 

    // Store
    store(data:any){
        console.log("Storing data into internal memory...");
    }

    // Retrieve
    retrieve(key:string):any{
        console.log("Retrieving data from internal memory...");
    }

    // Output
    output(information: any){
        console.log(information);
    }
}

// Is-A Relationship LSP & ISP
class Laptop extends Computer implements WiFiSupportedDevice, BluetoothSupportedDevice{
    connectToWIFI(){
        console.log('Connecting to wifi.');
        return true;
    }

    connectToBleatooth(){
        console.log('Connecting to Bluetooth.');
        return true;
    }

    // added functionality
    fold(){}
}


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
console.log(computer1.getInputDevice().input());

// Tests
function testComputer(computer:Computer){
    computer.input();
    computer.process();
    computer.store("any thing");
    computer.retrieve("name");
    computer.output("just");
}
testComputer(computer1);
