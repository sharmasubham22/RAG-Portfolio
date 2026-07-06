import Container from "./Container";
import { SectionLabel } from "./ReusableHeadings";

export default function Section({
  id,
  title,
  subtitle,
  description,
  children,
}) {
  return (
    <section id={id} className="py-32">
      <Container>
        {(title || subtitle) && (
          <div className="mb-20 max-w-3xl">
            {subtitle && <SectionLabel>{subtitle}</SectionLabel>}
            {title && <h1 className="font-serif text-6xl my-5">{title}</h1>}
            {description && (
              <p className="mb-10 max-w-2xl text-sm md:text-lg leading text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}
