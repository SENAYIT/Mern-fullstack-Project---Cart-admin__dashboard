import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { lusitana } from "@/ui/fonts";
import { fetchTop_Products } from "@/lib/products/fetchTop_Products";
import Image from "next/image";
import SectionHeader from "./sectionHeader";

export default async function TopProducts() {
  const top_Products = await fetchTop_Products();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <SectionHeader
          title="Top Selling Products"
          viewAllLink="/dashboard/products"
        />

        <div className="bg-white px-6">
          {top_Products.map((product, i) => {
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
                <div className="flex items-center">
                  <Image
                    src={product.image}
                    alt={`${product.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {product.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      price - $ {product.price}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {product.totalSold}
                </p>
                <p
                  className={`${lusitana.className} truncate text-sm font-bold text-green-500 md:text-base`}
                >
                  ${(product.totalSold * product.price).toFixed(2)}
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
