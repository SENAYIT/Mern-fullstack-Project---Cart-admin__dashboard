"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import GoToLink from "@/ui/gotoLink";

// Map of links to display in the side navigation.

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Employers Management",
    href: "/dashboard/",
    icon: DocumentDuplicateIcon,
  },
  { name: "Employers", href: "/dashboard/employers", icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <GoToLink key={link.name} href={link.href}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </GoToLink>
        );
      })}
    </>
  );
}
