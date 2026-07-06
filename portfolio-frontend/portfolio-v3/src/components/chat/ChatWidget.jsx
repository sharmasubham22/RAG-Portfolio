import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ChatButton open={open} onClick={() => setOpen(!open)} />
      <AnimatePresence>
        {open && <ChatWindow onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
