// import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import { DeleteCustomer, DetailCustomer, UpdateCustomer } from "./buttons";
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
                <Image
                  src={customer.profile_photo}
                  className="rounded-full"
                  alt={`${customer.name}'s profile picture`}
                  width={28}
                  height={28}
                />
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
              {customer.status}
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
