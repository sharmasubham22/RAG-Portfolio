from qdrant_client import QdrantClient
from qdrant_client.models import Distance
from qdrant_client.models import VectorParams
from qdrant_client.models import PointStruct
from qdrant_client.models import Filter
from ..models.document import VectorDocument
from ..core.config import settings


class QdrantService:

    def __init__(self):
        self.client = QdrantClient(
            url=settings.QDRANT_URL
        )
        self.collection = settings.QDRANT_COLLECTION
    
    def create_collection(self):
        collections = self.client.get_collections()
        names = [c.name for c in collections.collections]

        if self.collection in names:
            return

        self.client.create_collection(
            collection_name=self.collection,
            vectors_config=VectorParams(
                size=settings.OPENAI_EMBEDDING_DIMENSIONS,
                distance=Distance.COSINE,
            ),
        )

    def delete_collection(self):
        self.client.delete_collection(
            collection_name=self.collection
        )

    def exists(self):
        collections = self.client.get_collections()
        names = [c.name for c in collections.collections]
        return self.collection in names

    def upsert(self, documents: list[VectorDocument],):
        points = [
        PointStruct(
            id=document.id,
            vector=document.vector,
            payload=document.payload,
        )
        for document in documents
    ]

        self.client.upsert(
            collection_name=self.collection,
            points=points,
        )

    def search(self, query_vector: list[float], limit: int = 5, query_filter: Filter | None = None,):
        results = self.client.query_points(
            collection_name=self.collection,
            query=query_vector,
            limit=limit,
            query_filter=query_filter,
        )

        return results.points
    
qdrant_service = QdrantService()