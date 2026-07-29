import GoToLink from "@/ui/gotoLink";
import { UserIcon } from "@heroicons/react/24/outline";
import SignOut from "./signOut";

export default function Header() {
  const adminProfile = "adminId or sesion use";
  return (
    <div className="flex flex-row items-center justify-between">
      <p>Admin dashboard</p>
      <div className="flex gap-3">
        <GoToLink href={`/dashboard/${adminProfile}`}>
          <UserIcon className="w-6" />
          <div className="hidden md:block">Admin</div>
        </GoToLink>
        <SignOut />
      </div>
    </div>
  );
}
