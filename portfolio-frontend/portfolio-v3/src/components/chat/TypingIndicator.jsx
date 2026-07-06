import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-4">
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
        className="
                    flex
                    items-center
                    gap-2
                    rounded-3xl
                    rounded-tl-lg
                    bg-muted

                    px-5
                    py-4
                "
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -4, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: index * 0.15,
            }}
            className="
                            h-2
                            w-2
                            rounded-full
                            bg-primary
                        "
          />
        ))}
      </div>
    </div>
  );
}
