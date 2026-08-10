import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type PropsType = {
  href: string;
};

export function Create({ href, text }: PropsType & { text: string }) {
  return (
    <Link
      href={href}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{text}</span>
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

// the below are smaller

export function Detail({ href }: PropsType) {
  return (
    <Link href={href} className="text-blue-900 hover:text-blue-700">
      <span className="hidden md:block">Details...</span>
      <span className="md:hidden">...</span>
    </Link>
  );
}

export function Update({ href }: PropsType) {
  return (
    <Link
      href={href}
      className="rounded-md border border-gray-400 p-1 hover:bg-gray-100"
    >
      <PencilIcon className="w-5 h-5 text-blue-950 hover:text-blue-700" />
    </Link>
  );
}

export function DeleteButton() {
  return (
    <button
      type="submit"
      className="rounded-md border border-gray-400 p-1 hover:bg-red-700"
    >
      <TrashIcon className="w-5 h-5 text-red-700 hover:text-gray-100" />
    </button>
  );
}
