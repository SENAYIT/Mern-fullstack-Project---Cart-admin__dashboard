"use client";
import {
  UserGroupIcon,
  ShoppingCartIcon,
  HomeIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import GoToLink from "@/ui/commonForAll/gotoLink";

// Map of links to display in the side navigation.

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Orders Management",
    href: "/dashboard/orders",
    icon: ShoppingCartIcon,
  },
  {
    name: "Products Management",
    href: "/dashboard/products",
    icon: ShoppingBagIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <GoToLink key={link.name} href={link.href} className="">
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </GoToLink>
        );
      })}
    </>
  );
}
