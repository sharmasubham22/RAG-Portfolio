from app.services.chat_service import chat_service

response = chat_service.chat(
    "Say hello."
)

print(response)