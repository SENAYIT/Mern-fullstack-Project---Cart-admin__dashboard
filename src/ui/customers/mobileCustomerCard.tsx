import Image from "next/image";
import { DeleteCustomer, DetailCustomer, UpdateCustomer } from "./buttons";
import { Customer } from "@/lib/customers/definitions";
export default function MobileCustomerCard({
  customer,
}: {
  customer: Customer;
}) {
  return (
    <div className="flex flex-col items-start justify-between border-b pb-4">
      <div className="mb-2">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex items-center gap-3">
            <Image
              src={customer.profile_photo ?? "/favicon.ico"}
              className="rounded-full"
              alt={`${customer.name}'s profile picture`}
              width={28}
              height={28}
            />
            <p>{customer.name}</p>
            <span className="flex items-center self-end">
              {customer.status}
            </span>
          </div>

          <div className="flex flex-col items-start justify-center gap-3">
            <p className="text-sm text-gray-500">{customer.email}</p>
            <p className="text-sm text-gray-500">{customer.phoneNumber}</p>
            <p className="text-sm text-gray-500">{customer.status}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-1 items-center self-end">
        <DetailCustomer id={customer._id} />
        <UpdateCustomer id={customer._id} />
        <DeleteCustomer id={customer._id} />
      </div>
    </div>
  );
}
