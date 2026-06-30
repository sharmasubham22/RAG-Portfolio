from abc import ABC, abstractmethod
from app.models.document import Document

class DocumentProcessor(ABC):

    @abstractmethod
    def process(self) -> list[Document]:
        """Read a source and return normalized Document objects."""
        pass