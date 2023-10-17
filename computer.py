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


class Desktop(Computer):
    pass

computer1 = Computer(Mouse())
computer1.input()

