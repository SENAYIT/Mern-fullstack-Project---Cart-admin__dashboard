import Container from "@/ui/commonForAll/container";
import MobileOrderCard from "@/ui/orders/mobileOrderCard";
import OrdersTable from "@/ui/orders/ordersTable";
import { Order } from "@/lib/orders/definitions";
import TablePagination from "@/components/common/detail/table_pagination";
export default function detailDatashow({ orders }: { orders: Order[] }) {
  const totalData = Number(orders.length);

  return (
    <section>
      <h2 className="font-bold py-2 px-4 mb-2 text-lg">
        Customer's Orders List
      </h2>
      <Container>
        <div className=" md:hidden">
          {orders?.map((order) => (
            <div
              key={order._id}
              className="mb-2 w-full rounded-md bg-white p-4 md:hidden"
            >
              <MobileOrderCard order={order} />
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <OrdersTable orders={orders} />
        </div>
      </Container>
      <TablePagination totalData={totalData} />
    </section>
  );
}
