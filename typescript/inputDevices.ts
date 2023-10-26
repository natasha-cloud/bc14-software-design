export default abstract class InputDevice{
    abstract input(): any;
}

export class Keyboard extends InputDevice{
    input(){
        console.log("Inputting data from keyboard...");
    }
}

export class Mouse extends InputDevice{
    input(){
        console.log("Inputting data using Mouse...");
    }
}
