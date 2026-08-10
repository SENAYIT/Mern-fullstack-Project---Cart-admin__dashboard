import CardSection from "./card_section";
import RevenueChart from "./revenue-chart";
import TopProducts from "./top-Products";
import LowStockProducts from "./lowStockProducts";
import RecentCustomers from "./recentCustomer";
import RecentOrders from "./recentOrders";
export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-4 px-0 md:px-6">
      <CardSection />
      <div className="block md:flex md:items-center md:justify-between md:gap-4">
        <RevenueChart />
        <TopProducts />
      </div>
      <div className="block md:flex md:items-center md:justify-between md:gap-4">
        <RecentOrders />
        <RecentCustomers />
        <LowStockProducts />
      </div>
    </div>
  );
}
