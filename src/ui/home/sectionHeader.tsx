import GotoLink from "@/components/common/gotoLink";
import { lusitana } from "@/ui/fonts";

export default function SectionHeader({
  title,
  viewAllLink,
}: {
  title: string;
  viewAllLink: string;
}) {
  return (
    <div className="flex justify-between items-center p-2">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        {title}
      </h2>
      <GotoLink
        href={viewAllLink}
        styles="bg-white rounded py-1.5 px-3 border border-white "
      >
        View All
      </GotoLink>
    </div>
  );
}
