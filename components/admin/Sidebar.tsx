// /admin/components/Sidebar.tsx
import Link from "next/link";

export const navItems = [
  {
    label: "Dashboard",
    href: "/admin/",
  },
  {
    label: "Projects",
    href: "/admin/projects",
  },
  {
    label: "Blog",
    href: "/admin/blog",
  },
  {
    label: "Setting",
    href: "/admin/setting",
  },
];
export default function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r-1 text-lg">
      <ul className="p-4">
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="block py-2  rounded-md hover:underline"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
