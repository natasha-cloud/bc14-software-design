import { BluetoothSupportedDevice } from "./bluetooth";
import InputDevice from "./inputDevices"
import OutputDevice from "./outputDevices";
import { WiFiSupportedDevice } from "./WiFi";

// Backup
    // public name: string;
    // public brand: string;
    // public model: string;
    // public category: string = "generic";
    // public internalMemory = {}


/**
    The Responsibility of this Computer class now is to control other Peripherals.
    And control is the only rason why Coputer can change.
**/
export default class Computer{

    // Hide computer Fields/Properties from the public
    private inputDevice:InputDevice;
    private outputDevice:OutputDevice;


    // Computer's default settings/configurations using the constructor function.
    constructor(
        inputDevice:InputDevice, 
        outputDevice:OutputDevice
    ){
        this.inputDevice = inputDevice;
        this.outputDevice = outputDevice;
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


