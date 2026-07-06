import { questions } from "@/data/questions";

export default function SuggestedQuestions({ onQuestionClick}) {
  return (
    <div
      className="mt-6 flex flex-wrap gap-2"
    >
      {questions.map((question) => (
        <button
          key={question}
          onClick={() => onQuestionClick(question.label)}
          className="flex items-center gap-3 rounded-full border border-border/50 bg-card transition hover:border-primary hover:bg-muted hover:text-primary px-3 text-sm text-muted-foreground cursor-pointer">
          {question.label}
        </button>
      ))}
    </div>
  );
}
