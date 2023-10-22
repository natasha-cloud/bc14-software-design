import { BluetoothSupportedDevice } from "./bluetooth";
import InputDevice from "./inputDevices"
import { WiFiSupportedDevice } from "./WiFi";


/**
The Responsibility of this Computer class now is to control other Peripherals.
Hence after implementing all the S.O.L.I.D Principles, 
the computer class now is a controller class.
And control is the only rason why Coputer can change.
**/
export default class Computer{
    // Fields
        // public name: string;
        // public brand: string;
        // public model: string;
        // public category: string = "generic";
        // public internalMemory = {}

    private inputDevice:InputDevice;

    constructor(inputDevice:InputDevice){
        this.inputDevice = inputDevice
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

    // Control Processing Devices
    process(){
        console.log("process with Intel processor...")
     }
 

    // Control Storage (and Retrieval) Devices
    store(data:any){
        console.log("Storing data into internal memory...");
    }

    retrieve(key:string):any{
        console.log("Retrieving data from internal memory...");
    }

    // Control Output Devices
    output(data: any){
    }
}

// Is-A Relationship LSP & ISP
export class Laptop extends Computer implements WiFiSupportedDevice, BluetoothSupportedDevice{
    connectToWIFI(){
        console.log('Connecting to wifi.');
        return true;
    }

    connectToBleatooth(){
        console.log('Connecting to Bluetooth.');
        return true;
    }

    // added functionality
    fold(){
        console.log("Folding...");       
    }
}


