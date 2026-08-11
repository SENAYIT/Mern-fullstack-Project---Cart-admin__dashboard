import Container from "@/ui/commonForAll/container";
import MobileProductCard from "./mobileProductCard";
import ProductTable from "./productTable";
import TablePagination from "../common/detail/table_pagination";

export type OrderProduct = {
  product: string;
  quantity: number;
};

export default function OrdersProductList({
  orderProducts,
}: {
  orderProducts: OrderProduct[];
}) {
  const totalData = orderProducts.length;
  return (
    <section>
      <h2 className="font-bold py-2 px-4 mb-2 text-lg">
        Order's Products List
      </h2>
      <Container>
        <div className="block md:hidden">
          {orderProducts.map((product) => (
            <div
              key={product.product}
              className="mb-2 w-full rounded-md bg-white p-4 md:hidden"
            >
              <MobileProductCard orderProduct={product} />
            </div>
          ))}
        </div>
        <ProductTable orderProducts={orderProducts} />
      </Container>
      <TablePagination totalData={totalData} />
    </section>
  );
}
