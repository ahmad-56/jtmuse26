function GlitchText({ text, slices = 6 }) {
  return (
    <div className="inline-block relative">
      {Array.from({ length: slices }).map((_, i) => (
        <div
          key={i}
          className="glitch-slice absolute top-0 left-0 w-full"
          style={{
            clipPath: `inset(${i * (100 / slices)}% 0 ${(slices - i - 1) * (100 / slices)}% 0)`,
          }}
          data-text={text}
        >
          {text}
        </div>
      ))}
      <span className="opacity-0">{text}</span>
    </div>
  );
}

export default GlitchText;
