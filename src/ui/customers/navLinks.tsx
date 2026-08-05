import GoToLink from "@/ui/commonForAll/gotoLink";

// Map of links to display in the side navigation.

const links = [
  { name: "All", href: "/dashboard/customers" },
  { name: "Active", href: "/dashboard/customers/status/active" },
  { name: "Inactive", href: "/dashboard/customers/status/inactive" },
  {
    name: "Blocked",
    href: "/dashboard/customers/status/blocked",
  },
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
