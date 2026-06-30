from dotenv import load_dotenv
import os
from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):

    OPENAI_API_KEY: str 
    OPENAI_CHAT_MODEL: str
    OPENAI_EMBEDDING_MODEL: str 
    OPENAI_EMBEDDING_DIMENSIONS: int = 1536
    QDRANT_URL: str 
    QDRANT_COLLECTION: str 
    DEBUG: bool = True

    class Config:
        env_file = ".env"


@lru_cache
def get_settings():
    return Settings()


settings = get_settings()