"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  // className: string;
};

export default function StatusGoToLink({
  href,
  children,
  // className = "",
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
          `flex items-center justify-center gap-2  text-sm font-medium  hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600`,
          {
            "text-blue-600 border-b-2 border-b-blue-600": isActive,
          },
        )}
      >
        {children}
      </Link>
    </>
  );
}
