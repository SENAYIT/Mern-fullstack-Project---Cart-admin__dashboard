"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/ui/button";
import SpanStar from "@/ui/spanStar";
import { Employer } from "@/lib/employers/definitions";

import { updateEmployer, State } from "@/lib/employers/actions";
import { useActionState, useState } from "react";
import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";

export default function EditEmployerForm({ employer }: { employer: Employer }) {
  const initialState: State = { message: null, errors: {} };
  const updateEmployerWithId = updateEmployer.bind(null, employer.id);
  const [file, setFile] = useState<File | null>(null);

  const [state, formAction] = useActionState(
    updateEmployerWithId,
    initialState,
  );
  // const handleFile = (e) => {
  //   const selectedFile = e.target.files?.[0];
  //   if (selectedFile) {
  //     setFile(selectedFile);
  //   }
  // };

  const { name, image_url, email, phoneNumber, password } = employer;

  return (
    <form action={formAction}>
      <div
        id="form"
        aria-describedby="form-error"
        className="rounded-md bg-gray-50 p-4 md:p-6"
      >
        {/* Employer Name */}
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
                defaultValue={name}
                placeholder="please enter name"
                className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name && (
              <p className="mt-2 text-sm text-red-500">{state.errors.name}</p>
            )}
          </div>
        </div>

        {/* Employer email */}
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
                defaultValue={email}
                placeholder="please enter email"
                className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="email-error"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email && (
              <p className="mt-2 text-sm text-red-500">{state.errors.email}</p>
            )}
          </div>
        </div>

        {/* Employer Phone Number  */}
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
                defaultValue={phoneNumber}
                placeholder="please enter phone number"
                className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="phoneNumber-error"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="phoneNumber-error" aria-live="polite" aria-atomic="true">
            {state.errors?.phoneNumber && (
              <p className="mt-2 text-sm text-red-500">
                {state.errors.phoneNumber}
              </p>
            )}
          </div>
        </div>
        {/* Employer Password  */}
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
                defaultValue={password}
                placeholder="please enter password"
                className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="password-error"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {state.errors?.password && (
              <p className="mt-2 text-sm text-red-500">
                {state.errors.password}
              </p>
            )}
          </div>
        </div>
        {/* Employer Image  */}
        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Upload Image
          </label>
          <div className="flex gap-2 items-center">
            {file && (
              <Image
                src={file ? URL.createObjectURL(file) : image_url}
                alt="Preview"
                height={20}
                width={20}
                className="h-20 w-20 rounded-full object-cover"
              />
            )}
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  setFile(selectedFile);
                }
              }}
              className="cursor-pointer text-gray-600 focus:ring-2"
              aria-describedby="image-error"
            />
          </div>
          <div id="image-error" aria-live="polite" aria-atomic="true">
            {state.errors?.image_url &&
              state.errors.image_url.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* for handling the overall form submission error   */}
        <div id="form-error" aria-live="polite" aria-atomic="true">
          {state.message && (
            <p className="mt-2 text-sm text-red-500" key={state.message}>
              {state.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/employers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
