from app.document_processors.base import DocumentProcessor
from app.document_processors.markdown_processor import MarkdownProcessor

class ProcessorFactory:
    _processors = {
        "markdown": MarkdownProcessor,
    }

    @classmethod
    def create(cls, processor_type: str,) -> DocumentProcessor:
        processor = cls._processors.get(processor_type)
        if processor is None:
            raise ValueError(
                f"Unknown processor: {processor_type}"
            )

        return processor()