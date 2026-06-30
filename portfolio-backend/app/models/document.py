from pydantic import BaseModel

class Document(BaseModel):
    source: str
    title: str
    content: str


class Chunk(BaseModel):
    id: str
    source: str
    title: str
    text: str
    chunk_index: int

class VectorDocument(BaseModel):
    id: str
    vector: list[float]
    payload: dict