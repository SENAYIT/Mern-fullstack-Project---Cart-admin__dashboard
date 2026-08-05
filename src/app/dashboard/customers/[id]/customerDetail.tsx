import Image from "next/image";
import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  IdentificationIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function CustomerDetails() {
  const customer = {
    id: "CUS-00001",
    name: "John Anderson",
    email: "john.anderson@example.com",
    phoneNumber: "+1 (555) 123-4567",
    joined: "July 20, 2026",
    updated: "July 30, 2026",
    address: "245 Madison Avenue, New York, NY 10001",
    profile_photo: "/customers/favicon.ico",
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Profile + Details */}
      <div className="flex flex-col md:flex-row gap-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        {/* Profile */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={customer.profile_photo}
            alt={customer.name}
            width={160}
            height={160}
            className="h-40 w-40 rounded-full border object-cover"
          />

          <h2 className="mt-4 text-2xl font-bold">{customer.name}</h2>

          <p className="text-sm text-gray-500">{customer.email}</p>
        </div>

        {/* Details */}
        <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <UserCircleIcon className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{customer.name}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <EnvelopeIcon className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{customer.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <PhoneIcon className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-medium">{customer.phoneNumber}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <IdentificationIcon className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Customer ID</p>
              <p className="font-medium">{customer.id}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CalendarDaysIcon className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Joined Date</p>
              <p className="font-medium">{customer.joined}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CalendarDaysIcon className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="font-medium">{customer.updated}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:col-span-2">
            <MapPinIcon className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">{customer.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
