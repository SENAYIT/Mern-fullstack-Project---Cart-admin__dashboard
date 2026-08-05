import CardSection from "./card_section";
import LatestOrders from "./latest-orders";
import RevenueChart from "./revenue-chart";
import TopProducts from "./top-Products";
import LowStockProducts from "./lowStockProducts";

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-4 px-0 md:px-6">
      <CardSection />
      <div className="block md:flex md:items-center md:justify-between md:gap-4">
        <RevenueChart />
        <LatestOrders />
      </div>
      <div className="block md:flex md:items-center md:justify-between md:gap-4">
        <TopProducts />
        <LowStockProducts />
      </div>
    </div>
  );
}
