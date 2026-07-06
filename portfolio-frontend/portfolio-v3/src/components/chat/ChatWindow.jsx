import { motion } from "framer-motion";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import useChat from "@/hooks/useChat";

export default function ChatWindow({ onClose }) {

    const {
      messages,
      input,
      setInput,
      loading,
      error,
      sendMessage,
    } = useChat();

    
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      transition={{
        duration: 0.2,
      }}
      className="z-40 flex flex-col rounded-3xl border border-border/50 bg-background shadow-2xl
      fixed

bottom-24
right-2
left-2

sm:left-auto
sm:right-6

w-auto
sm:w-105

h-[70vh]
sm:h-140"
    >
      <ChatHeader onClose={onClose} />

      <ChatMessages
        messages={messages}
        loading={loading}
        onQuestionClick={sendMessage}
      />

      {error && <div className="px-6 py-2 text-sm text-red-500">{error}</div>}

      <ChatInput
        value={input}
        onChange={setInput}
        onSend={sendMessage}
        loading={loading}
      />
    </motion.div>
  );
}
