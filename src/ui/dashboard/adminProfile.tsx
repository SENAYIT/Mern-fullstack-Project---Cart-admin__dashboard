import GoToLink from "@/ui/commonForAll/gotoLink";
import { UserIcon } from "@heroicons/react/24/outline";

export default function AdminProfile() {
  const adminProfile = "adminId or sesion use";

  return (
    <GoToLink href={`/dashboard/${adminProfile}`} className="">
      <UserIcon className="w-6" />
      <div className="hidden md:block">Admin</div>
    </GoToLink>
  );
}
