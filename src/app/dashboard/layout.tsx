import Header from "@/ui/dashboard/bodyHeader";
import SideNav from "@/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full fixed left-0 top-0 z-100 flex-none md:w-64 bg-white">
        <SideNav />
      </div>

      <div className="relative grow p-6 mt-40 md:overflow-y-auto md:mt-0 md:ml-64">
        {children}
      </div>
    </div>
  );
}
