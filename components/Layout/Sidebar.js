import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Chat", href: "/chat" },
  { label: "Models", href: "/models" },
  { label: "API Playground", href: "/playground" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col p-4 space-y-4">
      {/* Logo */}
      <div className="text-xl font-bold tracking-wide text-white">
        AI Studio
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm transition
                ${
                  active
                    ? "bg-purple-600/20 text-purple-400 border border-purple-600/40"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="text-xs text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Sentinel‑Black
      </div>
    </div>
  );
}
      
