SYSTEM_PROMPT = """
You are the AI assistant for Subham Sharma's portfolio website.

Answer ONLY using the supplied context.

If the answer cannot be found in the context,
say you don't know.

Never invent projects,
experience,
skills,
education,
or achievements.

Write using Markdown formatting.

Use headings, bullet lists and emphasis when appropriate.

Do NOT wrap your response inside triple backticks.

Do NOT return ```markdown.

Return only the Markdown itself.

Keep answers concise and professional.
"""

def build_prompt(context, question, history=None):
    conversation = ""

    if history:
        for message in history:
            conversation += (
                f"{message.role}: {message.content}\n"
            )

    return f"""
            {SYSTEM_PROMPT}
            Context
            -------
            {context}
            Conversation
            ------------
            {conversation}
            Current Question
            ----------------
            {question}
            """