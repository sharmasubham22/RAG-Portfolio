from app.core.config import settings
from app.services.openai_service import openai_service

class EmbeddingService:
    def create_embedding(self, text: str,) -> list[float]:
        response = openai_service.client.embeddings.create(
            model=settings.OPENAI_EMBEDDING_MODEL,
            input=text,
        )

        return response.data[0].embedding

    def create_embeddings(self, texts: list[str],) -> list[list[float]]:
        if not texts:
            return []

        response = openai_service.client.embeddings.create(
            model=settings.OPENAI_EMBEDDING_MODEL,
            input=texts,
        )

        return [
            embedding.embedding
            for embedding in response.data
        ]


embedding_service = EmbeddingService()