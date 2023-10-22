export default abstract class OutputDevice{
    abstract output(): boolean;
}

export class Monitor extends OutputDevice{
    output(){
        console.log("Outputing data on the Monitor...");
        return true;
    }
}

export class Mouse extends OutputDevice{
    output(){
        console.log("Outputing data on Mouse...");
        return true;
    }
}
