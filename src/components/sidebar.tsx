// components/Sidebar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/drivers", label: "Motoristas" },
  { href: "/vehicles", label: "Veículos" },
  { href: "/trips", label: "Viagens" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Logística</h2>
      <nav className="space-y-3">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`block px-3 py-2 rounded-md ${
              pathname === href
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
