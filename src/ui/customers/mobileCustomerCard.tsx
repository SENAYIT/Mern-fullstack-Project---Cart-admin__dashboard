import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";
import {
  DeleteCustomer,
  DetailCustomer,
  UpdateCustomer,
} from "./actionButtons";
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
            {customer.profile_photo ? (
              <Image
                src={customer.profile_photo ?? "/favicon.ico"}
                className="rounded-full"
                alt={`${customer.name}'s profile picture`}
                width={28}
                height={28}
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <UserIcon className="h-6 w-6 text-gray-500" />
              </div>
            )}

            <p>{customer.name}</p>
            <span
              className={`flex w-fit items-center self-end rounded-full px-2.5 py-1 text-xs font-medium ${
                customer.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : customer.status === "Inactive"
                    ? "bg-yellow-100 text-yellow-700"
                    : customer.status === "Blocked"
                      ? "bg-red-100 text-red-700"
                      : customer.status === "Not-Blocked"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-600"
              }`}
            >
              {customer.status}
            </span>
          </div>

          <div className="flex flex-col items-start justify-center gap-3">
            <p className="text-sm text-gray-500">{customer.email}</p>
            <p className="text-sm text-gray-500">{customer.phoneNumber}</p>
<p className="text-sm text-gray-500">
  <span
    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
      customer.status === "Active"
        ? "bg-green-100 text-green-700"
        : customer.status === "Inactive"
          ? "bg-yellow-100 text-yellow-700"
          : customer.status === "Blocked"
            ? "bg-red-100 text-red-700"
            : customer.status === "Not-Blocked"
              ? "bg-purple-100 text-purple-700"
              : "bg-gray-100 text-gray-600"
    }`}
  >
    {customer.status}
  </span>
</p>          </div>
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
