import OverviewPage from "@/ui/home/overview";
import Header from "@/ui/dashboard/bodyHeader";
export default function Page() {
  return (
    <main>
      <div className="hidden md:block mt-0 mb-1.5 p-1 pt-0 border-b-2 border-b-gray-100">
        <Header title="Welcome, Admin" />
      </div>
      <OverviewPage />
    </main>
  );
}
