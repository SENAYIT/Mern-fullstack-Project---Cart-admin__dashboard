import { Order } from "@/lib/orders/definitions";
import { fetchProductById } from "@/lib/products/fetchProduct_byId";

export const productName = async (orderProdId: string) => {
  let productName = "";
  const data = await fetchProductById(orderProdId);
  if (data) {
    productName = data.name;
    return productName;
  }
  productName = "Unknown";
  return productName;
};
// forProductName
export default function GetOrderProducts({ order }: { order: Order }) {
  return (
    <div className="flex flex-col items-start gap-0.5">
      {order.products.map((orderproduct, i) =>
        i <= 1 ? (
          <p key={i}>{productName(orderproduct.product)} </p>
        ) : (i = 2) ? (
          <p key={i}> ... </p>
        ) : (
          ""
        ),
      )}
    </div>
  );
}
