type Stat = {
  title: string;
  value: string | number;
};

type Props = {
  stats: Stat[];
};

export default function StatsCard({ stats }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl border bg-white p-5 shadow-sm"
        >
          <p className="text-sm text-gray-500">{stat.title}</p>

          <h3 className="mt-2 text-2xl font-bold">{stat.value}</h3>
        </div>
      ))}
    </div>
  );
}
