// Create the implementor class

export default interface Brand{
    boot():void;
  }
  
  // Concrete implementors
  
  // 1. Dell
  
  export class Dell implements Brand{
      boot(): void {
          console.log("Dell Computer booting ...")
      }
  }
  
  // 2. Hp
  
  export class HP implements Brand{
      boot(): void {
          console.log("Hp Computer booting ...")
      }
  }
  
  //3. Lenovo
  
  export class Lenovo implements Brand{
      boot(): void {
          console.log("Lenovo Computer booting ...")
      }
  }
  
  
  export class IBM implements Brand{
      boot(): void {
          console.log("IBM Computer booting ...")
      }
  }
  
  
  