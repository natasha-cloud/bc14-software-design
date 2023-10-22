export default abstract class OutputDevice{
    abstract output(data: any): boolean;
}

export class Monitor extends OutputDevice{
    output(data: any){
        console.log("=======================================");
        console.log("Outputing data on the Monitor Screen...");
        console.log("=======================================");
        console.log("Data:\n");
        console.log(data);
        return true;
    }
}

export class Projector extends OutputDevice{
    output(data: any){
        console.log("=======================================");
        console.log("Outputing data on a Projection...");
        console.log("=======================================");
        console.log("Data:\n");
        console.log(data);
        return true;
    }
}
