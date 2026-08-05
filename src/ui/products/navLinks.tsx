import GoToLink from "@/ui/commonForAll/gotoLink";

// Map of links to display in the side navigation.

const links = [
  { name: "All", href: "/dashboard/products" },
  { name: "New", href: "/dashboard/products/status/new" },
  { name: "Active", href: "/dashboard/products/status/active" },
  {
    name: "Low Stock",
    href: "/dashboard/products/status/low-stock",
  },
  { name: "Inactive", href: "/dashboard/products/status/inactive" },
];

export default function NavLinks() {
  return (
    <div className="flex items-center justify-start gap-2">
      {links.map((link) => (
        <GoToLink key={link.name} href={link.href} className="">
          {link.name}
        </GoToLink>
      ))}
    </div>
  );
}
