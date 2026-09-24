import type { Source } from "@/data/site";

export function SourceList({ items }: { items: Source[] }) {
  return (
    <ol className="source-list">
      {items.map((source) => (
        <li id={`source-${source.id}`} key={source.id}>
          <a href={source.url} target="_blank" rel="noreferrer">{source.name}</a>
          <span>{source.supports} Kiểm tra: {source.checked}.</span>
        </li>
      ))}
    </ol>
  );
}
