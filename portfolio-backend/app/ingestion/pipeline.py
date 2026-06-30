from .chunker import chunker
from .splitter import document_splitter
from ..services.embedding_service import embedding_service
from ..services.qdrant_service import qdrant_service
from ..models.document import VectorDocument, Chunk, Document
from ..document_processors.factory import ProcessorFactory
from ..core.logger import logger

class IngestionPipeline:
    def _load_documents(self):
        processor = ProcessorFactory.create(
            "markdown"
        )
        return processor.load()
    
    def _chunk_documents(self, documents: list[Document],) -> list[Chunk]:
        chunks = []
        for document in documents:
            sections = document_splitter.split(document)
            for section in sections:
                chunks.extend(
                    chunker.chunk_document(section)
                )

        return chunks

    def _vectorize_chunks(self, chunks: list[Chunk],) -> list[VectorDocument]:
        texts = [
            chunk.text
            for chunk in chunks
        ]

        vectors = embedding_service.create_embeddings(texts)
        vector_documents = []

        for chunk, vector in zip(chunks, vectors):
            vector_documents.append(
                VectorDocument(
                    id=chunk.id,
                    vector=vector,
                    payload={
                        "text": chunk.text,
                        "title": chunk.title,
                        "source": chunk.source,
                        "chunk": chunk.chunk_index,
                    },
                )
            )

        return vector_documents
    
    def _store(self, vector_documents,):
        qdrant_service.upsert(
            documents=vector_documents
        )

    def _reset_collection(self):
        if qdrant_service.exists():
            qdrant_service.delete_collection()

        qdrant_service.create_collection()
    
    def run(self):
        try:
            self._reset_collection()
            documents = self._load_documents()
            chunks = self._chunk_documents(documents)
            vector_documents = self._vectorize_chunks(chunks)
            self._store(vector_documents)

        except Exception:
            logger.exception("Ingestion failed.")
            raise

ingest_pipeline = IngestionPipeline()