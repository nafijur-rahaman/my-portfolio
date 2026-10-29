// Renders text where *words in asterisks* get the accent gradient.
export default function RichText({ text, highlightClassName = "text-gradient font-semibold" }) {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <span key={i} className={highlightClassName}>
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    )
  );
}
