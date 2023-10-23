from abc import ABC, abstractmethod
from typing import Any, Dict

class Memory(ABC):
    @abstractmethod
    def store(self, data: Any, key: str) -> bool:
        pass

    @abstractmethod
    def retrieve(self, key: str) -> Any:
        pass

class PrimaryMemory(Memory):
    def __init__(self):
        self.memory = {}

    def store(self, data: Any, key: str) -> bool:
        print('Storing Data in Primary Memory...')
        self.memory[key] = data
        print('Data stored successfully!')
        return True

    def retrieve(self, key: str) -> Any:
        print('Retrieving Data from Primary Memory...')
        return self.memory.get(key, None)

class SecondaryMemory(Memory):
    def __init__(self):
        self.memory = {}

    def store(self, data: Any, key: str) -> bool:
        print('Storing Data in Secondary Memory...')
        self.memory[key] = data
        print('Data stored successfully!')
        return True

    def retrieve(self, key: str) -> Any:
        print('Retrieving Data from Secondary Memory...')
        return self.memory.get(key, None)

