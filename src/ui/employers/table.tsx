import Image from "next/image";
import { DeleteEmployer, DetailEmployer, UpdateEmployer } from "./buttons";
import { fetchFilteredEmployers } from "@/lib/employers/fetchFilteredEmployers";

export default async function EmployersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const employers = await fetchFilteredEmployers(query, currentPage);

  if (!employers || employers.length === 0) {
    return (
      <div className="h-72 flex items-center justify-center">
        <p>No employees</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {employers?.map((employer) => (
                  <div
                    key={employer._id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={employer.profile_photo}
                              className="rounded-full"
                              alt={`${employer.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{employer.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {employer.email}
                        </p>
                        <p className="text-sm text-gray-500">
                          {employer.phoneNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                      Edit
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {employers.map((employer) => (
                    <tr key={employer._id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={employer.profile_photo}
                            className="rounded-full"
                            alt={`${employer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{employer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {employer.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {employer.phoneNumber}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        <div className="flex gap-1 items-center">
                          <DetailEmployer id={employer._id} />
                          <UpdateEmployer id={employer._id} />
                          <DeleteEmployer id={employer._id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
