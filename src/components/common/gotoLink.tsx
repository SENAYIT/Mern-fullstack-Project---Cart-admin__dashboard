import Link from "next/link";
import React from "react";

type GotoLinkProps = {
  href: string;
  children: React.ReactNode;
  styles: string;
};
export default function GotoLink({
  href,
  children,
  styles = "",
}: GotoLinkProps) {
  return (
    <Link
      href={href}
      className={` text-gray hover:text-blue-700 hover:underline ${styles}`}
    >
      {children}
    </Link>
  );
}
