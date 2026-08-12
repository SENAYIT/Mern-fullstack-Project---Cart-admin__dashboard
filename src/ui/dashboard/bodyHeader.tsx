import AdminProfile from "./adminProfile";
import SignOut from "./signOut";
import Cart from "./cart";

export default function Header({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <h1 className="font-medium">{title}</h1>

      <div className="flex gap-3">
        <Cart />
        <AdminProfile />
        <SignOut />
      </div>
    </div>
  );
}
