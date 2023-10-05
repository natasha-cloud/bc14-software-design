/*
    Computer class:
    - Can input data
    - can store & retrieve data to memory
    - can process data
    - Can output data
    - can connect to WI-FI
    - can connect bluetooth device
*/ 
class Computer{
    // Fields
    public name: string;
    public brand: string;
    public model: string;
    public category: string = "generic";
    public internalMemory = {}

    input(data:any){
        console.log("Inputing data from keyboard...");
        this.store(data)
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

function testComputer(computer:Computer){
    computer.input({"name":"senjack"});
    computer.retrieve("name");
    computer.output(computer.category);
    computer.connectToWIFI();
    computer.connectToBluetoothDevice();
}
testComputer(computer1);