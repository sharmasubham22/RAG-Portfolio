from ..ingestion.context_builder import context_builder
from ..ingestion.prompts import SYSTEM_PROMPT, build_prompt
from ..ingestion.retriever import retriever
from .chat_service import chat_service

class RagService:
    def answer(self, question: str, history=None,):
        # Retrieve relevant chunks
        results = retriever.retrieve(question)

        # Build context
        context, sources = context_builder.build(results)

        # Build prompt
        prompt = build_prompt(
            context=context,
            question=question,
            history=history,
        )
        print("=" * 80)
        print("QUESTION")
        print(question)

        print("=" * 80)
        print("CONTEXT")
        print(context)

        print("=" * 80)
        print("PROMPT")
        print(prompt)

        # Ask GPT
        answer = chat_service.generate(
            system_prompt=SYSTEM_PROMPT,
            prompt=prompt,
        )

        return answer, sources
    
    def stream_answer(self, question: str, history=None,):
         # Retrieve relevant chunks
        results = retriever.retrieve(question)

        # Build context
        context, sources = context_builder.build(results)

        # Build prompt
        prompt = build_prompt(
            context=context,
            question=question,
            history=history,
        )

        # Ask GPT
        return chat_service.stream(
        system_prompt=SYSTEM_PROMPT,
        prompt=prompt,
    )

rag_service = RagService()