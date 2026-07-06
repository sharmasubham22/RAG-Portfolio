import ReactMarkdown from "react-markdown";

export default function ChatBubble({ message }) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div
          className="max-w-[80%] rounded-3xl rounded-br-lg bg-primary text-background text-sm px-4 py-3"
        >
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 w-full">
      <div
        className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-primary
                text-sm
                font-bold
                text-background
                shrink-0
            "
      >
        AI
      </div>

      <div
        className="rounded-3xl rounded-tl-lg bg-muted text-sm px-4 py-3
        max-w-[90%]
        min-w-0
        wrap-break-word
        "
      >
        <div
          className="prose
                        prose-invert
                        max-w-none
                        prose-p:my-2
                        prose-ul:my-2
                        prose-li:my-1
                        prose-headings:mt-0"
        >
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
