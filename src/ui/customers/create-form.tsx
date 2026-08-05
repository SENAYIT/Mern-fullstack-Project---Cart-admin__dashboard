"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/ui/commonForAll/button";
import SpanStar from "@/ui/commonForAll/spanStar";
import { useActionState, useState } from "react";
import { createCustomer } from "@/lib/customers/create_action";
import { State } from "@/lib/customers/definitions";
import ConfirmationModal from "@/ui/commonForAll/confirmationModal";

import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function Form() {
  const initialState: State = {
    success: false,
    message: null,
    errors: {},
    values: {},
  };

  const [state, formAction] = useActionState<State, FormData>(
    createCustomer,
    initialState,
  );

  const [file, setFile] = useState<File | null>(null);

  return (
    <form action={formAction}>
      <div
        id="form"
        aria-describedby="form-error"
        className="w-full rounded-md bg-gray-50 p-4 md:p-6"
      >
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
            <SpanStar />
          </label>

          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={state.values?.name ?? ""}
                placeholder="please enter name"
                className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
              />

              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="name-error">
            {state.errors?.name?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
            <SpanStar />
          </label>

          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="text"
                defaultValue={state.values?.email ?? ""}
                placeholder="please enter email"
                className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="email-error"
              />

              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="email-error">
            {state.errors?.email?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>
        {/* Customer Phone Number */}
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="mb-2 block text-sm font-medium"
          >
            Phone Number
            <SpanStar />
          </label>

          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                defaultValue={state.values?.phoneNumber ?? ""}
                placeholder="please enter phone number"
                className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="phoneNumber-error"
              />

              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="phoneNumber-error">
            {state.errors?.phoneNumber?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Customer Password */}
        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
            <SpanStar />
          </label>

          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                defaultValue={state.values?.password ?? ""}
                placeholder="please enter password"
                className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="password-error"
              />

              <LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="password-error">
            {state.errors?.password?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Customer Image */}
        <div className="mb-4">
          <label
            htmlFor="profile_photo"
            className="mb-2 block text-sm font-medium"
          >
            Upload Profile Photo
          </label>

          <div className="flex gap-2 items-center">
            {file && (
              <Image
                src={URL.createObjectURL(file)}
                alt="Preview"
                height={20}
                width={20}
                className="h-20 w-20 rounded-full object-cover"
              />
            )}

            <input
              id="profile_photo"
              name="profile_photo"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  setFile(selectedFile);
                }
              }}
              className="cursor-pointer text-gray-600 focus:ring-2"
              aria-describedby="profile_photo-error"
            />
          </div>

          <div id="profile_photo-error">
            {state.errors?.profile_photo?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Form error */}
        <div id="form-error">
          {state.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}
        </div>
      </div>

      {state.success && (
        <ConfirmationModal
          text={state.message ?? "Successfully Created The User"}
          // next_href="/orders"
        />
      )}

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>

        <Button type="submit">Create Customer</Button>
      </div>
    </form>
  );
}
