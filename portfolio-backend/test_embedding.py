from app.services.embedding_service import embedding_service

vector = embedding_service.create_embedding(
    "Hello world"
)

print(len(vector))