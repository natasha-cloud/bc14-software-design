from abc import ABC, abstractmethod

# Abstraction => No details but only rules
class InputDevice(ABC):

    @abstractmethod
    def input() -> any:
        pass


# Implementation => Has the details
class Mouse(InputDevice):
    
    def input(self):
        print('Inputing data from Mouse...')
        return {}

class Keyboard(InputDevice):
    
    def input(self):
        print('Inputing data from keyboard')
        return {}


class Computer():
    # Fields
    __inputDevice: InputDevice

    # Methods
    def __init__(self, inputDevice: InputDevice):
        self.__inputDevice = inputDevice

    def input(self):
        return self.__inputDevice.input()

    # Setter for input device
    def set_input_device(self, input_device):
        self.__input_device = input_device

    # Getter for input device
    def get_input_device(self):
        return self.__input_device

# Computer Objects
computer1:Computer = Computer(Keyboard())

# Change input device dynamically using a setter
computer1.set_input_device(Mouse())
computer1.set_input_device(Keyboard())

# Access the value of a private field using a getter
computer1.set_input_device(Keyboard())
print(computer1.get_input_device())

def test_computer(computer):
    computer.input()
    # computer.retrieve("name")
    # computer.output(computer.category)

test_computer(computer1)
