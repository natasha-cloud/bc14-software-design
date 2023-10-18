// SRP => A class should have only one reason to change
// DIP => A High level module should not depend on a Low Level module,
    // instead both should depend on abstraction

/*
    Computer class:
    - Can input data
    - can store & retrieve data to memory
    - can process data
    - Can output data
    - can connect to WI-FI
    - can connect bluetooth device
*/

abstract class InputDevice{
    abstract input(): any;
}

class Keyboard extends InputDevice{
    input(){
        console.log("Inputing data from keyboard...");
    }
}

class Mouse extends InputDevice{
    input(){
        console.log("Inputing data from Mouse...");
    }
}

abstract class OutputDevice{
    abstract output(): any;
}

class Monitor extends OutputDevice{
    output(){
        console.log("Displays data on computer monitor");
    }
}

class Speaker extends OutputDevice{
    output(){
        console.log("Outputing sound from speaker");
    }
}


// Supertype / Contract
class Computer{
    // Fields
        // public name: string;
        // public brand: string;
        // public model: string;
        // public category: string = "generic";
        // public internalMemory = {}

    private inputDevice:InputDevice;
    private outputDevice:OutputDevice;
    // Methods
    constructor(inputDevice:InputDevice, outputDevice:OutputDevice){
        this.inputDevice = inputDevice
        this.outputDevice = outputDevice
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


    // output
    output(){
        this.outputDevice.output();
     }
 
     setOutputDevice(outputDevice:OutputDevice){
         this.outputDevice = outputDevice;
     }
 
     getOutputDevice(){
         return this.outputDevice
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
    // output(information: any){
    //     console.log(information);
    // }
}

interface WiFiSupportedDevice{
    // connectToWIFI();
}

interface BluetoothSupportedDevice{
    // connectToBluetooth();
}

// Is-A Relationship LSP & ISP
class Desktop extends Computer implements WiFiSupportedDevice, BluetoothSupportedDevice{
    // We can add extra functionality to this class
    balance(){}
    connectToWIFI(){
        console.log('Connecting to wifi.');
    }

    connectToBleatooth(){
        console.log('Connecting to Bluetooth.');
    }
}

class Laptop extends Computer{
    // We can add extra functionality to this class   
    fold(){}
}

class Walltop extends Computer{
    // We can add extra functionality to this class   
    hang(){}
}

class SmartPhone extends Computer{
    // We can add extra functionality to this class   
    screenTouch(){}
}

class OldModelComputer extends Computer{
    // We can add extra functionality to this class
    legacyMethod(){

    }
} 


// Computer Objects
let computer1 = new Computer(new Keyboard(), new Monitor());

// Change inpute device dynamically using a setter
computer1.setInputDevice(new Mouse());
computer1.setOutputDevice(new Speaker());

// Access the value of a private field using a getter
console.log(computer1.getInputDevice());
console.log(computer1.getOutputDevice());
// Tests
function testComputer(computer:Computer){
    computer.input();
    computer.output();
}
testComputer(computer1);
