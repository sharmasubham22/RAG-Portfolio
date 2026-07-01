import { motion } from "framer-motion";
import Container from "../common/Container";
import { Button } from "../ui/button";
import { siteConfig } from "../../config/site";
import { SectionLabel } from "../common/ReusableHeadings";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <SectionLabel>Available for Opportunities</SectionLabel>

          <h1 className="mb-6 text-4xl md:text-6xl lg:text-8xl font-serif leading-tight my-5">
            Creating{" "}
            <span className="text-primary text-shadow-[0_10px_25px_rgba(93,164,156,0.4)]">
              <i>immersive</i>
            </span>{" "}
            digital experiences.
          </h1>

          {/* <h2 className="mb-8 text-2xl text-slate-300">
            {siteConfig.role}

            <span className="mx-3 text-secondary">•</span>

            {siteConfig.secondaryRole}
          </h2> */}

          <p className="mb-10 max-w-2xl text-sm md:text-lg leading text-muted-foreground">
            {siteConfig.description}
          </p>

          <div className="relative sm:flex gap-2 sm:gap-4 mt-10 sm:w-auto">
            <Button variant="default" size="hero" className="w-full sm:w-auto">
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="hero"
              className="w-full sm:w-auto mt-2 sm:mt-0"
            >
              View Projects
            </Button>
          </div>
        </motion.div>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
          ↓ Scroll
        </motion.div>
      </Container>
    </section>
  );
}
