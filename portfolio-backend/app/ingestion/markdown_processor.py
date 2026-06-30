from pathlib import Path
from ..models.document import Document

class MarkdownProcessor:
    def __init__(self, data_path: str = "my-data",):
        self.data_path = Path(data_path)

    def process(self) -> list[Document]:
        documents = []
        for file in self.data_path.glob("*.md"):
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

markdown_processor = MarkdownProcessor()