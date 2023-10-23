from abc import ABC, abstractmethod
from typing import List, Any

class Processor(ABC):
    @abstractmethod
    def fetch(self, instruction_id: int) -> str:
        pass

    @abstractmethod
    def decode(self, instruction: str) -> List[str]:
        pass

    @abstractmethod
    def execute(self, actions: List[str]) -> bool:
        pass

    @abstractmethod
    def process(self, data: Any, instruction_id: int) -> bool:
        pass


class Intel(Processor):
    def fetch(self, instruction_id: int) -> str:
        print(f"Instruction ID: {instruction_id}")
        return "Do something."

    def decode(self, instruction: str) -> List[str]:
        print(f"Instruction: {instruction}")
        return ["Action_1: Do A", "Action_2: Do B", "Action_3: Do C", "Action_4: Do D"]

    def execute(self, actions: List[str]) -> bool:
        for action in actions:
            print(action)
        return True

    def process(self, data: Any, instruction_id: int) -> bool:
        print("Processing data using an Intel Processor...")
        print(f"Data to be processed: {data}")
        print("Process starts now...")
        return self.execute(self.decode(self.fetch(instruction_id)))

class AMD(Processor):
    def fetch(self, instruction_id: int) -> str:
        print(f"Instruction ID: {instruction_id}")
        return "Do something."

    def decode(self, instruction: str) -> List[str]:
        print(f"Instruction: {instruction}")
        return ["Action_1: Do A", "Action_2: Do B", "Action_3: Do C", "Action_4: Do D"]

    def execute(self, actions: List[str]) -> bool:
        for action in actions:
            print(action)
        return True

    def process(self, data: Any, instruction_id: int) -> bool:
        print("Processing data using an AMD Processor...")
        print(f"Data to be processed: {data}")
        print("Process starts now...")
        return self.execute(self.decode(self.fetch(instruction_id)))


class NVIDIA(Processor):
    def fetch(self, instruction_id: int) -> str:
        print(f"Instruction ID: {instruction_id}")
        return "Do something."

    def decode(self, instruction: str) -> List[str]:
        print(f"Instruction: {instruction}")
        return ["Action_1: Do A", "Action_2: Do B", "Action_3: Do C", "Action_4: Do D"]

    def execute(self, actions: List[str]) -> bool:
        for action in actions:
            print(action)
        return True

    def process(self, data: Any, instruction_id: int) -> bool:
        print("Processing data using an NVIDIA Processor...")
        print(f"Data to be processed: {data}")
        print("Process starts now...")
        return self.execute(self.decode(self.fetch(instruction_id)))
