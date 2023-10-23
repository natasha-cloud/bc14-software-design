import { BluetoothSupportedDevice } from "./bluetooth";
import InputDevice from "./inputDevices"
import OutputDevice from "./outputDevices";
import Processor from "./processors";
import { WiFiSupportedDevice } from "./WiFi";

/**
    The Responsibility of this Computer class is to control other Peripherals.
    And control is the only rason why Coputer would change.
**/
export default class Computer{

    // Hide computer Fields/Properties from the public
        private inputDevice:InputDevice;
        private processor:Processor;
        private outputDevice:OutputDevice;


    // Computer's default settings/configurations using the constructor function.
        constructor(
            inputDevice:InputDevice,
            processor:Processor, 
            outputDevice:OutputDevice
        ){
            this.inputDevice = inputDevice;
            this.processor = processor;
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
        process(data:any, instructionId:number): boolean{
            return this.processor.process(data, instructionId);
        }
    
        setProcessor(processor:Processor){
            this.processor = processor;
        }

        getProcessor(){
            return this.processor
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
