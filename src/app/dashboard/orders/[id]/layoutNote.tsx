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
  // const breadcrumbLinks = [
  //   { label: "Orders", href: "dashboard/orders" },
  //   { label: id, href: `dashboard/orders/${id}`, active: true },
  //   { label: "edit", href: `dashboard/orders/${id}/edit` },
  // ];
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Orders", href: "/dashboard/orders" },
          { label: id, href: `dashboard/orders/${id}`, active: true },
          { label: "edit", href: `dashboard/orders/${id}/edit` },
        ]}
      />
      {children}
    </main>
  );
}
