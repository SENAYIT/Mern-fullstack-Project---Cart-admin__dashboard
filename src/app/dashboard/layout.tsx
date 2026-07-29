import Header from "@/ui/dashboard/bodyHeader";
import SideNav from "@/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      <div className="grow p-6 md:overflow-y-auto md:p-6">
        <div className="hidden md:block mb-6 p-2 border-b-2 border-b-gray-100">
          <Header />
        </div>

        {children}
      </div>
    </div>
  );
}
