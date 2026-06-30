from pathlib import Path
from .base import KnowledgeSource

class FolderSource(KnowledgeSource):
    def __init__(self, path: str):
        self.path = Path(path)

    def files(self):
        return list(self.path.glob("*"))