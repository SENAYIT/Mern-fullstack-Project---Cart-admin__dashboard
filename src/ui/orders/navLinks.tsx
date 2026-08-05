import GotoLink from "@/ui/commonForAll/gotoLink";

// Map of links to display in the side navigation.

const links = [
  { name: "All", href: "/dashboard/orders" },
  { name: "New", href: "/dashboard/orders/status/new" },
  { name: "Pending", href: "/dashboard/orders/status/pending" },
  {
    name: "Done",
    href: "/dashboard/orders/status/completed",
  },
  { name: "Cancel", href: "/dashboard/orders/status/cancelled" },
];

export default function NavLinks() {
  return (
    <div className="flex items-center justify-start gap-4">
      {links.map((link) => (
        <GotoLink key={link.name} href={link.href} className="">
          {link.name}
        </GotoLink>
      ))}
    </div>
  );
}
