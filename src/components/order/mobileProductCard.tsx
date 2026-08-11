import { DetailProduct } from "@/ui/products/buttons";
import { productName } from "@/ui/orders/getOrderProduct";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { OrderProduct } from "./orderProductsList";
export default function MobileProductCard({
  orderProduct,
}: {
  orderProduct: OrderProduct;
}) {
  const { product, quantity } = orderProduct;

  return (
    <div className="flex my-4 flex-col items-start justify-between border-b pb-4">
      <div className="mb-2">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
            </div>

            <p>{product}</p>
          </div>

          <div className="flex flex-col items-start justify-center gap-3">
            <p className="text-sm text-gray-500">
              Product- {productName(product)}
            </p>

            <p className="text-sm text-gray-500">Quantity- {quantity}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-3 items-center self-end">
        <DetailProduct id={product} />
      </div>
    </div>
  );
}
