import re
from app.models.document import Document

class DocumentSplitter:
    def split(self, document: Document) -> list[Document]:
        pattern = r"(?=^###\s)"
        sections = re.split(
            pattern,
            document.content,
            flags=re.MULTILINE,
        )
        documents = []
        for section in sections:
            section = section.strip()
            if not section:
                continue
            lines = section.splitlines()
            title = lines[0].replace("#", "").strip()
            content = "\n".join(lines[1:]).strip()
            documents.append(
                Document(
                    source=document.source,
                    title=title,
                    content=content,
                )
            )

        return documents

document_splitter = DocumentSplitter()