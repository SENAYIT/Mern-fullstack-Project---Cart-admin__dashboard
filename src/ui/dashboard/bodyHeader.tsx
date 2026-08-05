import GoToLink from "@/ui/commonForAll/gotoLink";
import { UserIcon } from "@heroicons/react/24/outline";
import SignOut from "./signOut";

export default function Header({ title }: { title: string }) {
  const adminProfile = "adminId or sesion use";
  return (
    <div className="flex flex-row items-center justify-between">
      <h1 className="font-medium">{title}</h1>
      <div className="flex gap-3">
        <GoToLink href={`/dashboard/${adminProfile}`} className="">
          <UserIcon className="w-6" />
          <div className="hidden md:block">Admin</div>
        </GoToLink>
        <SignOut />
      </div>
    </div>
  );
}
