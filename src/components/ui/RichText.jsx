// Renders text where *words in asterisks* are emphasized (styled via highlightClassName).
export default function RichText({ text, highlightClassName = "font-medium text-fg" }) {
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
