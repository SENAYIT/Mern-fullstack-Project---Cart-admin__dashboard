import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/ui/fonts";

export default function AdminLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row gap-4 items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[22px]">Admin Dashboard</p>
    </div>
  );
}
