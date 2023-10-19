from abc import ABC, abstractmethod

class InputDevice(ABC):
    @abstractmethod
    def input(self):
        pass

class Keyboard(InputDevice):
    def input(self):
        print("Inputting data from the keyboard...")

class Mouse(InputDevice):
    def input(self):
        print("Inputting data from the mouse...")

class Computer:
    def __init__(self, input_device):
        self.__input_device = input_device

    def input(self):
        self.__input_device.input()

    def wifi_connection(self):
        print('Discoverable... Connect')
        return {}

    def set_input_device(self, input_device):
        self.__input_device = input_device

    def get_input_device(self):
        return self.__input_device

computer1 = Computer(Keyboard())

def test_computer(computer):
    computer.input()
    computer.wifi_connection()

test_computer(computer1)

class WifiConnect(ABC):
    @abstractmethod
    def wifi_connection(self):
        pass


class Bluetooth(ABC):
    @abstractmethod
    def blue_tooth(self):
        pass

class Smartphone(WifiConnect, Bluetooth):
    def wifi_connection(self):
        return "Connecting"

class Laptop(WifiConnect,Bluetooth):
    def wifi_connection(self):
        print("Enter password")




class RaspberryPi(WifiConnect):
    def wifi_connection(self):
        print("Connecting")

class SmartWatch(WifiConnect,Bluetooth):
    def wifi_connection(self):
        print("Connecting")

# Update ButtonPhone to match the InputDevice interface
class ButtonPhone(InputDevice):
    def input(self):
        print("Inputting data from Button Phone")

# Create a ButtonPhone instance
button_phone = ButtonPhone()
computer1.set_input_device(button_phone)
test_computer(computer1)
