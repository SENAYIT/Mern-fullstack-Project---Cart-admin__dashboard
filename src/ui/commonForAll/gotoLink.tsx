"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className: string;
};

export default function GoToLink({
  href,
  children,
  className = "",
}: LinkProps) {
  const pathname = usePathname();
  //   const isActive = pathname === href || pathname.startsWith(href + "/");
  const isActive =
    pathname === href ||
    (pathname.startsWith(href + "/") && href !== "/dashboard");
  return (
    <>
      <Link
        href={href}
        className={clsx(
          `flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${className}`,
          {
            "bg-sky-100 text-blue-600": isActive,
          },
        )}
      >
        {children}
      </Link>
    </>
  );
}
