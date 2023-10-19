
abstract class InputDevice {
    abstract input(): void;
  }
  
  class Keyboard extends InputDevice {
    input(): void {
      console.log("Inputting data from the keyboard...");
    }
  }
  
  class Mouse extends InputDevice {
    input(): void {
      console.log("Inputting data from the mouse...");
    }
  }
  
  class Computer {
    private inputDevice: InputDevice;
  
    constructor(inputDevice: InputDevice) {
      this.inputDevice = inputDevice;
    }
  
    input(): void {
      this.inputDevice.input();
    }
  
    wifiConnection(): any {
      console.log('Discoverable... Connect');
      return {};
    }
  
    setInputDevice(inputDevice: InputDevice): void {
      this.inputDevice = inputDevice;
    }
  
    getInputDevice(): InputDevice {
      return this.inputDevice;
    }
  }
  
  const computer1 = new Computer(new Keyboard());
  
  function testComputer(computer: Computer): void {
    computer.input();
    computer.wifiConnection();
  }
  
  testComputer(computer1);
  
  interface WifiConnect {
    wifiConnection(): string;
  }
  
  interface Bluetooth {
    blueTooth(): void;
  }
  
  class Smartphone implements WifiConnect, Bluetooth {
    wifiConnection(): string {
      return "Connecting";
    }
  
    blueTooth(): void {
      console.log("Bluetooth is connected.");
      console.log("Sending a file via Bluetooth...");
    }
  }
  
  class Laptop implements WifiConnect, Bluetooth {
    wifiConnection(): string {
      console.log("Enter password");
      return "Connecting";
    }
  
    blueTooth(): void {
      console.log("Bluetooth is connected.");
      console.log("Receiving a file via Bluetooth...");
    }
  }
  
  class walltop implements WifiConnect {
    wifiConnection(): string {
      console.log("Connecting");
      return "Connecting";
    }
  }
  
  class SmartWatch implements WifiConnect, Bluetooth {
    wifiConnection(): string {
      console.log("Connecting");
      return "Connecting";
    }
  
    blueTooth(): void {
      console.log("Bluetooth is connected.");
      console.log("Monitoring heart rate via Bluetooth...");
    }
  }
  
  
  class ButtonPhone extends InputDevice {
    input(): void {
      console.log("Inputting data from Button Phone");
    }
  }
  

  const buttonPhone = new ButtonPhone();
  computer1.setInputDevice(buttonPhone);
  testComputer(computer1);
  
  const smartphone = new Smartphone();
  smartphone.blueTooth(); 
  
  const laptop = new Laptop();
  laptop.blueTooth();  
  // "Bluetooth is connected." 
  
  const smartwatch = new SmartWatch();
  smartwatch.blueTooth(); 
  //  "Bluetooth is connected." 
  


  