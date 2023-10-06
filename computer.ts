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


class Computer{
    // Fields
    public name: string;
    public brand: string;
    public model: string;
    public category: string = "generic";
    public internalMemory = {}

    public inputDevice:InputDevice;

    // Methods
    input(){
       this.inputDevice.input();
    }

    store(data:any){
        console.log("Storing data into internal memory...");
        this.internalMemory = {...this.internalMemory, ...data}
    }

    retrieve(key:string):any{
        console.log("Retrieving data from internal memory...");
        return this.internalMemory[key];
    }

    output(information: any){
        console.log(information);
    }

    connectToWIFI(){
        console.log("Connecting to WI-FI");
    }

    connectToBluetoothDevice(){
        console.log("Connecting to Bluetooth Device...");
    }
}


// Computer Objects
let computer1 = new Computer();
computer1.inputDevice = new Keyboard()
computer1.inputDevice = new Mouse()


function testComputer(computer:Computer){
    computer.input();
    computer.retrieve("name");
    computer.output(computer.category);
    computer.connectToWIFI();
    computer.connectToBluetoothDevice();
}
testComputer(computer1);
