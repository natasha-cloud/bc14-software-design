export default interface Processor{
    fetch(instructionId:number): string;
    decode(instruction:string): Array<string>;
    execute(actions:Array<string>): boolean;
    process(data:any, instructionId:number): boolean;
}

export class Intel implements Processor{
    fetch(instructionId: number): string {
        console.log(`Instruction ID: ${instructionId}`);
        return "Do something."
    }

    decode(instruction: string): string[] {
        console.log(`Instruction: ${instruction}`);
        return ["Action_1: Do A", "Action_2: Do B", "Action_3: Do C", "Action_4: Do D"]
    }

    execute(actions: string[]): boolean {
        for (let action of actions) {
            console.log(action);
        }
        return true;
    }
    process(data:any, instructionId:number){
        console.log("Processing data using an Intel Processor...");
        console.log(`Data to be processed: ${data}`);
        console.log("Process starts now...");
        return this.execute(this.decode(this.fetch(instructionId)))
    }
}

export class AMD implements Processor{
    fetch(instructionId: number): string {
        console.log(`Instruction ID: ${instructionId}`);
        return "Do something."
    }

    decode(instruction: string): string[] {
        console.log(`Instruction: ${instruction}`);
        return ["Action_1: Do A", "Action_2: Do B", "Action_3: Do C", "Action_4: Do D"]
    }

    execute(actions: string[]): boolean {
        for (let action of actions) {
            console.log(action);
        }
        return true;
    }
    process(data:any, instructionId:number){
        console.log("Processing data using an AMD Processor...");
        console.log(`Data to be processed: ${data}`);
        console.log("Process starts now...");
        return this.execute(this.decode(this.fetch(instructionId)))
    }
}

export class NVIDIA implements Processor{
    fetch(instructionId: number): string {
        console.log(`Instruction ID: ${instructionId}`);
        return "Do something."
    }

    decode(instruction: string): string[] {
        console.log(`Instruction: ${instruction}`);
        return ["Action_1: Do A", "Action_2: Do B", "Action_3: Do C", "Action_4: Do D"]
    }

    execute(actions: string[]): boolean {
        for (let action of actions) {
            console.log(action);
        }
        return true;
    }
    process(data:any, instructionId:number){
        console.log("Processing data using an NVIDIA Processor...");
        console.log(`Data to be processed: ${data}`);
        console.log("Process starts now...");
        return this.execute(this.decode(this.fetch(instructionId)))
    }
}
