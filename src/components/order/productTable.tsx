import Image from "next/image";
import { DetailProduct } from "@/ui/products/buttons";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { productName } from "@/ui/orders/getOrderProduct";
import { OrderProduct } from "./orderProductsList";

export default function ProductTable({
  orderProducts,
}: {
  orderProducts: OrderProduct[];
}) {
  return (
    <table className="hidden min-w-full rounded-md text-gray-900 md:table">
      <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
        <tr>
          <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
            Product ID
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Name
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Quantity
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Details
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200 text-gray-900">
        {orderProducts.map((product) => (
          <tr key={product.product} className="group">
            <td className="whitespace-no wrap bg-white px-4 py-5 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
                </div>
                <p>{product.product}</p>
              </div>
            </td>

            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {/* {product.name} */}
              {productName(product.product)}
            </td>

            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {product.quantity}
            </td>

            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              <DetailProduct id={product.product} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
