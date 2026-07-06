import { useState } from "react";
import { sendMessage as sendMessageApi } from "@/services/chatApi";

const INITIAL_MESSAGE = {
  id: crypto.randomUUID(),
  role: "assistant",
  content: `Hi! 👋 I'm **Subham's AI assistant.** 
  I can answer any questions you have 
  about Subham's background, skills, experience, 
  or availability. What would you like to know?
`,
};

export default function useChat() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (message = input) => {
    const text = message.trim();
    if (!text) return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const response = await sendMessageApi(text);
      console.log(response.answer);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: response.answer,
        },
      ]);
    } catch (error) {
      setError(
        error.response?.data?.detail || "Unable to contact the AI assistant.",
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    loading,
    error,
    sendMessage,
  };
}