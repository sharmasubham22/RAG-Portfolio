export const GrayTitle = ({ children }) => (
  <span className="bg-linear-to-br from-stone-100 via-stone-300 to-stone-500 bg-clip-text text-transparent">
    {children}
  </span>
);

export const AquaTitle = ({ children }) => (
  <span className="bg-linear-to-br from-primary via-[#5da49c] to-[#2c766e] bg-clip-text text-transparent">
    {children}
  </span>
);

export const SectionLabel = ({ children }) => (
  <p className="inline-flex items-center gap-2 text-xs font-semibold font-mono text-primary tracking-[0.14em] uppercase">
    <span className="w-6 h-px bg-primary" />
    {children}
  </p>
);

export const SectionHeading = ({ gray, aqua }) => (
  <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight">
    <GrayTitle>{gray}</GrayTitle>
    <br />
    <AquaTitle>{aqua}</AquaTitle>
  </h2>
);
