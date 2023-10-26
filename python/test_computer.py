from computer import Computer, Laptop,Desktop
from input_devices import Keyboard, Mouse
from memory import PrimaryMemory, SecondaryMemory
from output_devices import Monitor, Projector
from processors import AMD, Intel, NVIDIA
from brands import Dell

computer1: Computer = None

computer1 = Laptop(Keyboard(), Intel(), PrimaryMemory(), Monitor(),Dell())


computer1.set_input_device(Mouse())
computer1.set_processor(AMD())
computer1.set_memory(SecondaryMemory())
computer1.set_output_device(Projector())

computer1.get_input_device().input()
computer1.get_processor().process("data to be processed", 192837465)
computer1.get_memory().store("This is data in memory", "key1")
print(computer1.get_memory().retrieve("key1"))
computer1.get_output_device().output("OutputData: Bootcamp 14...")

def test_computer(computer: Computer):
    computer.boot()
    computer.input()
    computer.process("data to be processed", 918273645)
    computer.store("Also!, This is data in memory", "key2")
    print(computer.retrieve("key2"))
    computer.output("OutputData: Bootcamp 14...")

test_computer(computer1)
