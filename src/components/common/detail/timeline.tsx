type Props = {
  items: string[];
};

export default function Timeline({ items }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold">Timeline</h2>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <span>{index === 0 ? "✅" : "⚪"}</span>

            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
