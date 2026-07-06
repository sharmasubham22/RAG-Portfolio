import { SendHorizontal, Loader2 } from "lucide-react";

export default function ChatInput({ value, onChange, onSend, loading }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSend();
    }
  };

  return (
    <div className="border-t border-border/50 bg-card rounded-b-3xl p-4">
      <div className="flex gap-3">
        <input
          placeholder="Ask me about Subham"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded-xl bg-muted border border-border/50 px-4 py-3 outline-none focus:border-primary"
        />

        <button
          onClick={() => {
            console.log("Button clicked");
            onSend();
          }}
          className="rounded-xl bg-primary px-3 text-background hover:bg-primary/80 cursor-pointer"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <SendHorizontal size={20} />
          )}
        </button>
      </div>
    </div>
  );
}
