// Screenshot inside a minimal browser window.
export default function BrowserFrame({ src, url, alt = "", className = "", imgClassName = "" }) {
  const host = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : null;
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] ${className}`}>
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        {host && (
          <span className="mx-auto truncate rounded-md bg-surface-2 px-3 py-0.5 font-mono text-[10px] text-muted">
            {host}
          </span>
        )}
      </div>
      <div className="overflow-hidden">
        <img src={src} alt={alt} loading="lazy" className={`aspect-[16/10] w-full object-cover object-top ${imgClassName}`} />
      </div>
    </div>
  );
}
