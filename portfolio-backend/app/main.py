from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api.health import router as health_router
from .api.chat import router as chat_router
from .services.qdrant_service import qdrant_service
from .services.openai_service import openai_service

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Starting application...")
    qdrant_service.create_collection()
    print("Qdrant ready.")
    yield
    print("Shutting down...")


app = FastAPI(
    title="Portfolio AI",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(chat_router)