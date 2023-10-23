export default interface Memory{
    store(data:any, key:string): boolean;
    retrieve(key:string): any;
}

export class PrimaryMemory implements Memory{
    private memory: {};

    store(data: any, key: string): boolean {
        console.log('Storing Data in Primary Memory...');
        this.memory = {...this.memory, [key]:data}
        console.log('Data stored successfully!');
        return true;
    }

    retrieve(key: string) {
        console.log('Retrieving Data from Primary Memory...');
        return this.memory[key];
    }
}


export class SecondaryMemory implements Memory{
    private memory: {};

    store(data: any, key: string): boolean {
        console.log('Storing Data in Secondary Memory...');
        this.memory = {...this.memory, [key]:data}
        console.log('Data stored successfully!');
        return true;
    }

    retrieve(key: string) {
        console.log('Retrieving Data from Secondary Memory...');
        return this.memory[key];
    }
}
