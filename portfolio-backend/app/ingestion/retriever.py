from ..services.embedding_service import embedding_service
from ..services.qdrant_service import qdrant_service
from qdrant_client.models import ScoredPoint

class Retriever:
    def retrieve(
        self,
        question: str,
        limit: int = 10,
        query_filter=None,
    ) -> list[ScoredPoint]:
        query_vector = embedding_service.create_embedding(question)
        results = qdrant_service.search(
            query_vector=query_vector,
            limit=limit,
            query_filter=query_filter,
        )

        return results

retriever = Retriever()