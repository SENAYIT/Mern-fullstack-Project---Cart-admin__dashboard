import React from "react";
import { CreateProduct } from "@/ui/products/buttons";
import Search from "@/ui/commonForAll/search";
import { Suspense } from "react";
import Loading from "@/app/dashboard/products/loading";
import NavLinks from "@/ui/products/navLinks";

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="border-b-2 border-b-gray-200 p-2">
        <NavLinks />
      </div>

      <div className="flex gap-4 w-full md:max-w-3/4 md:flex-row md:items-center">
        <Suspense fallback={<Loading text="Searching products Loading..." />}>
          <Search placeholder="Search Products..." />
        </Suspense>

        <div className="hidden md:flex md:items-center md:self-end md:gap-2">
          <CreateProduct />
        </div>
      </div>

      {children}
    </div>
  );
}
