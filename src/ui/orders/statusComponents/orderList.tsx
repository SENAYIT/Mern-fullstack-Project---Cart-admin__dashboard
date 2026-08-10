import { fetchFilteredOrders } from "@/lib/orders/fetchFilteredOrders";
import MobileOrderCard from "../mobileOrderCard";
import OrdersTable from "../ordersTable";
import Container from "@/ui/commonForAll/container";
export default async function OrdersList({
  status = "",
  query = "",
  currentPage = 0,
}: {
  status: string;
  query: string;
  currentPage: number;
}) {
  // console.log(`from the order list component the status is : ${status}`);

  const data = await fetchFilteredOrders(status, query, currentPage);
  const orders = data.orders;

  if (!orders || orders.length === 0) {
    return (
      <div className="h-72 flex items-center justify-center">
        <p>No Orders</p>
      </div>
    );
  }

  return (
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
        {orders && <OrdersTable orders={orders} />}
      </div>
    </Container>
  );
}

// <Container>
//     {orders?.map((order) => (
//       <>
//         <div
//           key={order._id}
//           className="mb-2 w-full rounded-md bg-white p-4 md:hidden"
//         >
//           <MobileOrderCard order={order} />
//         </div>
//         <div key={order._id} className="hidden md:block">
//           <OrdersTable order={order} />
//         </div>
//       </>
//     ))}
//   </Container>
