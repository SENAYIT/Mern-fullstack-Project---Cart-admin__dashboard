import React from "react";
import { CreateOrder } from "@/ui/orders/buttons";
import Search from "@/ui/commonForAll/search";
import { Suspense } from "react";
import Loading from "@/app/dashboard/orders/loading";
import NavLinks from "@/ui/orders/navLinks";
// import Filter from "@/ui/filter";
export default function StatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className="border-b-2 border-b-gray-200">
        <NavLinks />
      </div>

      <div className="flex gap-4 w-full md:max-w-3/4 md:flex-row md:items-center">
        <Suspense fallback={<Loading text="Searching Orders Loading..." />}>
          <Search placeholder="Search Orders..." />
        </Suspense>
        <div className="hidden md:flex md:items-center md:self-end md:gap-2">
          {/* <p>filter</p>
          <button>export</button> */}
          <CreateOrder />
        </div>
      </div>

      {children}
    </div>
  );
}
