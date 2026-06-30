from qdrant_client.models import ScoredPoint
from ..core.logger import logger

class ContextBuilder:
    def build(
        self,
        results: list[ScoredPoint],
    ) -> tuple[str, list[str]]:

        if not results:
            return "", []

        best_score = results[0].score

        # Keep results within 80% of the best score
        threshold = best_score * 0.8

        context = []
        sources = set()

        for point in results:
            if point.score < threshold:
                continue

            payload = point.payload

            context.append(
                f"## {payload['title']}\n\n{payload['text']}"
            )

            sources.add(payload["source"])

        return (
            "\n\n".join(context),
            sorted(sources),
        )



context_builder = ContextBuilder()