type Item = {
  label: string;
  value: string | number;
};

type Props = {
  title: string;
  items: Item[];
};

export default function InfoCard({ title, items }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold">{title}</h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex justify-between">
            <span className="text-gray-500">{item.label}</span>

            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
