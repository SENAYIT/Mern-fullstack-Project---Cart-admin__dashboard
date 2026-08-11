// import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import {
  DetailCustomer,
  UpdateCustomer,
  DeleteCustomer,
} from "./actionButtons";
import { UserIcon } from "@heroicons/react/24/outline";
import { Customer } from "@/lib/customers/definitions";

export default function CustomersTable({
  customers,
}: {
  customers: Customer[];
}) {
  return (
    <table className="hidden min-w-full rounded-md text-gray-900 md:table">
      <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
        <tr>
          <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
            Name
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Email
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Phone Number
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            status
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            total Orders
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            total Price
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Edit
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200 text-gray-900">
        {customers.map((customer) => (
          <tr key={customer._id} className="group">
            <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
              <div className="flex items-center gap-3">
                {customer.profile_photo ? (
                  <Image
                    src={customer.profile_photo}
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
              </div>
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {customer.email}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {customer.phoneNumber}
            </td>

            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
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
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              total Orders
            </td>

            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              total Price
            </td>

            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              <div className="flex gap-1 items-center">
                <DetailCustomer id={customer._id} />
                <UpdateCustomer id={customer._id} />
                <DeleteCustomer id={customer._id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
