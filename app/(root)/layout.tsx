import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/ui/MobileNav";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) redirect("/sign-in");

  return (
    <main className="flex h-screen w-full overflow-hidden font-inter">
      {/* Left Sidebar */}
      <Sidebar user={loggedIn} />

      {/* Content Area: Main + Right Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Header / Top Bar */}
          <div className="root-layout flex items-center justify-between px-4 py-2">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
            <MobileNav user={loggedIn} />
          </div>

          {/* Page Content Area */}
          <div className="flex flex-1 overflow-hidden">
            {/* Center Content */}
            <div className="flex-1 overflow-y-auto pb-4">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
