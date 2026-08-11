import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import { DeleteProduct, DetailProduct, UpdateProduct } from "./buttons";
import { Product } from "@/lib/products/definitions";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function ProductTable({ products }: { products: Product[] }) {
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
            stock
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Price
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            status
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Total Sold
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Created Date
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Updated Date
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            edit
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200 text-gray-900">
        {products.map((product) => (
          <tr key={product._id} className="group">
            <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
              <div className="flex items-center gap-3">
                {product.image ? (
                  <Image
                    src={"/favicon.ico"}
                    className="rounded-full"
                    alt={`${product._id}'s profile picture`}
                    width={28}
                    height={28}
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
                  </div>
                )}
                <p>{product._id}</p>
              </div>
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {product.name}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {product.stock}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {product.price.toFixed(2)}
            </td>

            <td
              className={`whitespace-nowrap bg-white px-4 py-5 text-sm ${product.status === "active" ? "text-green-500 bg-green-100" : product.status === "inactive" ? "text-red-500 bg-red-200" : product.status === "low-stock" ? "text-red-900 bg-red-200" : product.status === "new" ? "text-purple-900 bg-purple-200" : "text-gray-400"}`}
            >
              {product.status}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {product.totalSold}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {formatDateTime(product.createdAt)}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {formatDateTime(product.updatedAt)}
            </td>

            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              <div className="flex gap-1 items-center">
                <DetailProduct id={product._id} />

                <UpdateProduct id={product._id} />
                <DeleteProduct id={product._id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
