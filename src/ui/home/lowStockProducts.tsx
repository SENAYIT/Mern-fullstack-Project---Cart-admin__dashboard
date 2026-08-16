import { ArrowPathIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { lusitana } from "@/ui/fonts";
import { fetchLowStock_Products } from "@/lib/products/fetchLowStock_Products";
import Image from "next/image";
import SectionHeader from "./sectionHeader";

export default async function LowStockProducts() {
  const lowStock_Products = await fetchLowStock_Products();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <SectionHeader
          title="Low Stock Products"
          viewAllLink="/dashboard/products"
        />

        <div className="bg-white px-6">
          {lowStock_Products.map((product, i) => {
            return (
              <div
                key={product._id}
                className={clsx(
                  "flex flex-row items-center justify-between py-4",
                  {
                    "border-t border-t-gray-200": i !== 0,
                  },
                )}
              >
                <div className="flex items-center max-w-3/4">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={`image`}
                      className="mr-4 rounded-full"
                      // max-width={32}
                      // max-height={32}
                      width={32}
                      height={32}
                      priority
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base text-wrap">
                      {product.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {product.price}
                    </p>
                  </div>
                </div>

                <p
                  className={`${lusitana.className} truncate text-sm text-red-600  font-medium md:text-base`}
                >
                  {product.stock} left
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
