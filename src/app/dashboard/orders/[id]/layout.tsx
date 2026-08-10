import React from "react";
import { fetchOrderById } from "@/lib/orders/fetchOrder_byId";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/ui/commonForAll/breadcrumbs";

export default async function StatusLayout({
  params,
  children,
}: {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}) {
  const paramsValue = await params;
  const order_id = paramsValue.id;
  const id = order_id;
  const order = await fetchOrderById(id);

  if (!order_id || !order) {
    return notFound();
  }
  const breadcrumbLinks = [
    { href: "dashboard/orders", label: "Orders", active: false },
    { href: `dashboard/orders/${id}`, label: id, active: true },
    { href: `dashboard/orders/${id}/edit`, label: "edit", active: false },
    // { href: "/", label: "Orders", active: false },
    // { href: `dashboard/orders/${id}`, label: id, active: true },
    // { href: `/edit`, label: "edit", active: false },
  ];
  return (
    <main>
      <Breadcrumbs breadcrumbs={breadcrumbLinks} />
      {children}
    </main>
  );
}
