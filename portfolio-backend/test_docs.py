from app.rag.loader import markdown_loader

docs = markdown_loader.load_documents()

print(docs)