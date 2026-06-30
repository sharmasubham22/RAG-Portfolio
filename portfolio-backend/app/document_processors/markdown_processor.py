from pathlib import Path
from ..models.document import Document
from .base import DocumentProcessor

class MarkdownProcessor(DocumentProcessor):
    def __init__(
        self,
        data_path: str = "my-data",
    ):
        self.path = Path(data_path)

    def load(self) -> list[Document]:
        documents = []
        for file in self.path.glob("*.md"):
            documents.append(
                Document(
                    source=file.name,
                    title=file.stem.replace("_", " ").title(),
                    content=file.read_text(
                        encoding="utf-8"
                    ),
                )
            )

        return documents