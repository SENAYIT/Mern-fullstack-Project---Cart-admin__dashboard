import { DeleteProduct, DetailProduct, UpdateProduct } from "./buttons";
import Image from "next/image";
import { Product } from "@/lib/products/definitions";
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
            <Image
              src={image ?? "/favicon.ico"}
              className="rounded-full"
              alt={`${name}'s profile picture`}
              width={28}
              height={28}
            />
            <p>{name}</p>
            <span className="flex items-center self-end">{status}</span>
          </div>

          <div className="flex flex-col items-start justify-center gap-3">
            <p className="text-sm text-gray-500">{description}</p>
            <p className="text-sm text-gray-500">${price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{stock}</p>
            <p className="text-sm text-gray-500">${status}</p>
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
