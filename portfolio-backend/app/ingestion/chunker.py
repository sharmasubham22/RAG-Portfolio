import uuid
import tiktoken
from app.models.document import Chunk
from app.models.document import Document

class Chunker:
    def __init__(
        self,
        model: str = "text-embedding-3-small",
        chunk_size: int = 400,
        chunk_overlap: int = 50,
    ):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
        self.encoding = tiktoken.encoding_for_model(model)

    def chunk_document(
        self,
        document: Document,
    ) -> list[Chunk]:

        tokens = self.encoding.encode(document.content)
        chunks: list[Chunk] = []
        start = 0
        chunk_index = 0

        while start < len(tokens):
            end = min(start + self.chunk_size, len(tokens))
            chunk_tokens = tokens[start:end]
            chunk_text = self.encoding.decode(chunk_tokens)
            chunks.append(
                Chunk(
                    id=str(uuid.uuid4()),
                    source=document.source,
                    title=document.title,
                    text=chunk_text,
                    chunk_index=chunk_index,
                )
            )

            chunk_index += 1
            start += self.chunk_size - self.chunk_overlap

        return chunks

chunker = Chunker()