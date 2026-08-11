import AdminLogo from "@/ui/commonForAll/admin-logo";
import LoginForm from "@/ui/commonForAll/login-form";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-[400px] p-4">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-700 p-3 md:h-36">
          <div className="w-auto text-white">
            <AdminLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
