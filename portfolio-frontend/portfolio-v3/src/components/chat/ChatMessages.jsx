import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import SuggestedQuestions from "./SuggestedQuestions";
import TypingIndicator from "./TypingIndicator";

export default function ChatMessages({ messages, loading, onQuestionClick }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div
      className="
        flex-1
        overflow-y-auto
        bg-card
        px-6
        py-5
        space-y-8
      "
    >
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}

      {/* Typing indicator */}
      {loading && <TypingIndicator />}

      {/* Suggested questions only after the welcome message */}
      {messages.length === 1 && !loading && (
        <SuggestedQuestions onQuestionClick={onQuestionClick} />
      )}

      {/* Auto scroll target */}
      <div ref={bottomRef} />
    </div>
  );
}
