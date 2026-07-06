import { Sparkles } from "lucide-react";

export default function ChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer fixed text-background bottom-8 right-8 rounded-full tansition delay-100 ease-in-out hover:scale-[1.10] shadow-[0_10px_25px_rgba(93,164,156,0.4)] text-md p-2 sm:p-4 bg-primary"
    >
      <Sparkles />
      <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#34d399] border border-background rounded-full"></div>
    </button>
  );
}
