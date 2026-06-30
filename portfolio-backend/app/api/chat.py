from fastapi import APIRouter
from ..models.chat import ChatRequest
from ..models.chat import ChatResponse
from ..services.rag_service import rag_service
from fastapi.responses import StreamingResponse

router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)

@router.post("", response_model=ChatResponse,)
def chat(request: ChatRequest):
    answer, sources = rag_service.answer(
        question=request.question, 
        history=request.history,
        )

    return ChatResponse(
        answer=answer,
        sources=sources,
    )

@router.post("/stream")
def stream_chat(request: ChatRequest,):
    stream = rag_service.stream_answer(
        question=request.question,
        history=request.history,
    )
    return StreamingResponse(
        stream,
        media_type="text/plain",

    )
   