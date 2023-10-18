# InputDevice class:
# - Represents an input device
# - Follows SRP by having only one responsibility (input)
class InputDevice:
    def input(self):
        print("Default input method for an input device...")

# Keyboard class:
# - Represents a keyboard input device
class Keyboard(InputDevice):
    def input(self):
        print("Inputting data from keyboard...")

# Mouse class:
# - Represents a mouse input device
class Mouse(InputDevice):
    def input(self):
        print("Inputting data from Mouse...")

# Computer class:
# - Represents a computer
# - Follows SRP by having multiple methods, each with a single responsibility
class Computer:
    def __init__(self, input_device):
        self.__input_device = input_device

    # Input method for the computer
    def input(self):
        self.__input_device.input()

    # Setter for input device
    def set_input_device(self, input_device):
        self.__input_device = input_device

    # Getter for input device
    def get_input_device(self):
        return self.__input_device

# Computer Objects
computer1 = Computer(Keyboard())

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
    # computer.connect_to_wifi()
    # computer.connect_to_bluetooth_device()

test_computer(computer1)