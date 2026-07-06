import { X } from "lucide-react";

export default function ChatHeader({ onClose }) {
  return (
    <div
      className="flex
                items-center
                justify-between
                bg-muted
                rounded-t-3xl
                border-b
                border-border/50
                px-6
                py-4
            "
    >
      <div className="flex gap-3">
        <div className="px-2.5 py-2 rounded-full bg-primary text-background font-bold">
          SS
        </div>
        <div>
          <h2 className="font-semibold text-sm">Subham's AI Assistant</h2>

          <p className="text-xs text-[#34d399] font-mono">
            • Online - ask me anything
          </p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="text-muted-foreground hover:text-primary cursor-pointer"
      >
        <X size={18} />
      </button>
    </div>
  );
}
