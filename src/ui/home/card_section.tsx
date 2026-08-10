import CustomerCard from "./customerCard";
import {
  UsersIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

import {
  fetch_revenuesReport,
  fetch_ordersReport,
  fetch_customersReport,
  fetch_productsReport,
} from "@/lib/dashboard/fetch_overallReportsData";

export default async function CardSection() {
  const revenuesData = await fetch_revenuesReport();
  const ordersData = await fetch_ordersReport();
  const customersData = await fetch_customersReport();
  const productsData = await fetch_productsReport();

  return (
    <section className="p-0 md:p-2">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-4">
        <CustomerCard
          icon={<ShoppingCartIcon className="h-6 w-6" />}
          title={ordersData.title}
          total={ordersData.total}
          newToday={ordersData.newToday}
          growth={ordersData.growth}
          styles="bg-violet-500"
        />
        <CustomerCard
          icon={<UsersIcon className="h-6 w-6" />}
          title={customersData.title}
          total={customersData.total}
          newToday={customersData.newToday}
          growth={customersData.growth}
          styles="bg-green-500"
        />
        <CustomerCard
          icon={<ShoppingBagIcon className="h-6 w-6" />}
          title={productsData.title}
          total={productsData.total}
          newToday={productsData.newToday}
          growth={productsData.growth}
          styles="bg-blue-500"
        />

        <CustomerCard
          icon={<CurrencyDollarIcon className="h-6 w-6" />}
          title={revenuesData.title}
          total={revenuesData.total}
          newToday={revenuesData.newToday}
          growth={revenuesData.growth}
          styles="bg-orange-500"
        />
      </div>
    </section>
  );
}
