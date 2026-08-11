import { DeleteProduct, DetailProduct, UpdateProduct } from "./buttons";
import Image from "next/image";
import { Product } from "@/lib/products/definitions";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
export default function MobileProductCard({ product }: { product: Product }) {
  const {
    name,
    description,
    price,
    stock,
    status,
    image = "/favicon.ico",
  } = product;
  return (
    <div className="flex flex-col items-start justify-between border-b pb-4">
      <div className="mb-2">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex items-center gap-3">
            {image ? (
              <Image
                src={image ?? "/favicon.ico"}
                className="rounded-full"
                alt={`${name}'s profile picture`}
                width={28}
                height={28}
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
              </div>
            )}
            <p>{name}</p>
            <span
              className={`flex w-fit items-center self-end rounded-full px-2.5 py-1 text-xs font-medium ${
                status === "active"
                  ? "bg-green-100 text-green-700"
                  : status === "inactive"
                    ? "bg-red-100 text-red-700"
                    : status === "low-stock"
                      ? "bg-orange-100 text-orange-700"
                      : status === "new"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-600"
              }`}
            >
              {status}
            </span>{" "}
          </div>

          <div className="flex flex-col items-start justify-center gap-3">
            <p className="text-sm text-gray-500">{description}</p>
            <p className="text-sm text-gray-500">${price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{stock}</p>
            <p className="text-sm text-gray-500">
              Status -{" "}
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium ${
                  status === "active"
                    ? "bg-green-100 text-green-700"
                    : status === "inactive"
                      ? "bg-red-100 text-red-700"
                      : status === "low-stock"
                        ? "bg-orange-100 text-orange-700"
                        : status === "new"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-gray-100 text-gray-600"
                }`}
              >
                {status}
              </span>
            </p>{" "}
            <p className="text-sm text-gray-500">
              Total Sold: {product.totalSold}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-3 items-center self-end">
        <DetailProduct id={product._id} />

        <DeleteProduct id={product._id} />
        <UpdateProduct id={product._id} />
      </div>
    </div>
  );
}
