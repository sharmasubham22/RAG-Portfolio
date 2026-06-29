# Portfolio AI Chatbot Backend

This backend uses FastAPI and OpenAI to serve a simple chatbot API to a React Vite frontend.

## Setup

1. Create a virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate
```

2. Install dependencies:

```bash
pip install -r <(python - <<'PY'
from pathlib import Path
from tomllib import loads
pyproject = Path('pyproject.toml').read_text()
print('\n'.join([line.strip() for line in loads(pyproject)['project']['dependencies']]))
PY
)
```

3. Copy the example env file:

```bash
cp .env.example .env
```

4. Add your OpenAI API key to `.env`:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

## Run the backend

```bash
uvicorn src.main:app --reload --host 127.0.0.1 --port 8000
```

## API

- `POST /api/chat`
  - body: `{ "messages": [{ "role": "user", "content": "..." }] }`
  - response: `{ "reply": "..." }`

## Notes

The frontend is configured to proxy `/api` to `http://127.0.0.1:8000` in `portfolio-frontend/portfolio-v3/vite.config.js`.
