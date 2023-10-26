import { BluetoothDevice } from "./bluetooth";
import InputDevice from "./inputDevices"
import Memory from "./memory";
import OutputDevice from "./outputDevices";
import Processor from "./processors";
import { WiFiDevice } from "./WiFi";
import Brand, {HP, Dell, IBM, Lenovo } from "./brands";

/**
    The Responsibility of this Computer class is to control other Peripherals.
    And control is the only rason why Coputer would change.
**/
export default class Computer{

    // Hide computer Fields/Properties from the public
        private inputDevice:InputDevice;
        private processor:Processor;
        private memory:Memory;
        private outputDevice:OutputDevice;
        private brand:Brand;


    // Computer's default settings/configurations using the constructor function.
        constructor(
            inputDevice:InputDevice,
            processor:Processor,
            memory:Memory,
            outputDevice:OutputDevice,
            brand:Brand
        ){
            this.inputDevice = inputDevice;
            this.processor = processor;
            this.memory = memory;
            this.outputDevice = outputDevice;
            this.brand = brand;
        }

    // Control Input Devices
        input(){
        this.inputDevice.input();
        }

        setInputDevice(inputDevice:InputDevice){
            this.inputDevice = inputDevice;
        }

        getInputDevice(){
            return this.inputDevice
        }
        // Creating method boot 

        boot(){
            this.brand.boot();
        }

    

    // Control Processing Devices
        process(data:any, instructionId:number): boolean{
            return this.processor.process(data, instructionId);
        }
    
        setMemory(memory:Memory){
            this.memory = memory;
        }

        getMemory(){
            return this.memory
        }


     // Control Storage Devices
        store(data: any, key: string){
            return this.memory.store(data, key);
        }

        retrieve(key:string):any{
           return this.memory.retrieve(key);
        }

        setProcessor(processor:Processor){
            this.processor = processor;
        }

        getProcessor(){
            return this.processor
        }



    // Control Output Devices
        output(data: any){
            this.outputDevice.output(data);
        }

        setOutputDevice(outputDevice:OutputDevice){
            this.outputDevice = outputDevice;
        }

        getOutputDevice(){
            return this.outputDevice;
        }
}

// Laptop is a Computer that supports WiFi and Bluetooth technologies.
export class Laptop extends Computer implements WiFiDevice, BluetoothDevice{
    connectToWIFI(){
        console.log('Connecting to wifi.');
        return true;
    }

    connectToBluetooth(){
        console.log('Connecting to Bluetooth.');
        return true;
    }

    // added functionality
    fold(){
        console.log("Folding...");       
    }
}

//1. Desktop

class Desktop extends Computer{
    // we define a constructor  through which we shall pass the desktop benad 

}

//3. Walltop 
class Walltop extends Computer{
    // we define a constructor  through which we shall pass the desktop benad 

}

class Palmtop extends Computer{
    // we define a constructor  through which we shall pass the desktop benad 
 
}

class Tablet extends Computer{
    // we define a constructor  through which we shall pass the desktop benad 

}



// acess methods



