import "@/styles/globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-start h-screen">
      <div className="flex">
        <main className="w-full p-2">{children}</main>
      </div>
    </div>
  );
}
