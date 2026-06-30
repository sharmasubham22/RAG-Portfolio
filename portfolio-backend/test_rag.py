from app.ingestion.retriever import retriever

results = retriever.retrieve(
    "Built a full-stack resource sharing platform using React and Firebase"
)

for r in results:
    print(r.score)
    print(r.payload["title"])