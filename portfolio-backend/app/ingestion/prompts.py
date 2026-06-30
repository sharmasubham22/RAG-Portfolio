SYSTEM_PROMPT = """
You are the AI assistant for Subham Sharma's portfolio website.

Answer ONLY from the supplied context.

If information is missing,
say that you don't know.

Never invent projects,
experience,
skills,
education,
or achievements.

Use markdown.

If multiple projects are relevant,
mention each.

If appropriate,
use bullet points.

Keep answers professional.
"""

def build_prompt(context,question,history=None,):
    conversation = ""
    if history:
        for message in history:
            conversation += (
                f"{message.role}: "
                f"{message.content}\n"
            )

    return f"""
        Use ONLY the supplied context.
        =====================
        {context}
        =====================
        Conversation:
        {conversation}
        Current Question:
        {question}
        Answer in Markdown.
        """