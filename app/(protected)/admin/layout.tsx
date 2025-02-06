import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import "@/styles/globals.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-start h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="w-full p-2">{children}</main>
      </div>
    </div>
  );
}
