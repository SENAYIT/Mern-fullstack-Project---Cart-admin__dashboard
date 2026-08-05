import React from "react";
export default function CustomerCard({
  icon,
  title,
  total,
  newToday,
  growth,
}: {
  icon: React.ReactNode;
  title: string;
  total: string;
  newToday: string;
  growth: string;
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-3 text-blue-600">{icon}</div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{total}</p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-sm text-gray-500">New Today</p>
          <p className="mt-1 text-lg font-semibold text-gray-900">{newToday}</p>
        </div>

        <div className="rounded-lg bg-green-50 p-3">
          <p className="text-sm text-gray-500">Growth This Month</p>
          <p className="mt-1 text-lg font-semibold text-green-600">{growth}</p>
        </div>
      </div>
    </div>
  );
}
