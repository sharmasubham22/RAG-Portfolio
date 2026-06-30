from pydantic import BaseModel
from typing import Literal

class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str

class ChatRequest(BaseModel):
    question: str
    history: list[ChatMessage] = []

class ChatResponse(BaseModel):
    answer: str
    sources: list[str]