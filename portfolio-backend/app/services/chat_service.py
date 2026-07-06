from ..core.config import settings
from ..core.logger import logger
from .openai_service import openai_service


class ChatService:

    def generate(
        self,
        system_prompt: str,
        prompt: str,
    ) -> str:

        logger.info("Generating response from OpenAI")

        try:
            response = openai_service.client.responses.create(
                model=settings.OPENAI_CHAT_MODEL,
                instructions=system_prompt,
                input=prompt,
            )

            logger.info("RAW OPENAI RESPONSE:")
            logger.info(repr(response.output_text))

            return response.output_text

        except Exception:
            logger.exception("Failed to generate response.")
            raise

    def stream(self, system_prompt: str, prompt: str,):
        stream = self.client.responses.create(
        model=settings.OPENAI_CHAT_MODEL,
        instructions=system_prompt,
        input=prompt,
        stream=True,
    )

        for event in stream:
            if event.type == "response.output_text.delta":
                yield event.delta
        
chat_service = ChatService()