from abc import ABC, abstractmethod
from pathlib import Path

class KnowledgeSource(ABC):

    @abstractmethod
    def files(self) -> list[Path]:
        raise NotImplementedError