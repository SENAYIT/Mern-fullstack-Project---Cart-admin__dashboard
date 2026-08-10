import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  status?: string;
  editUrl?: string;
};

export default function DetailHeader({
  title,
  subtitle,
  status,
  editUrl,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        {status && (
          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            {status}
          </span>
        )}

        {editUrl && (
          <Link
            href={editUrl}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Edit
          </Link>
        )}
      </div>
    </div>
  );
}
