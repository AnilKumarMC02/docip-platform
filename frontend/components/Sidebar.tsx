import Link from "next/link";

const sidebarMenus = [
  { label: "Overview", path: "/" },

  { label: "Support Workspace", path: "/support" },

  { label: "Telecaller Assistant", path: "/telecaller" },

  { label: "Data Sync Center", path: "/data-sync" },

  { label: "Driver Intelligence", path: "/drivers" },

  { label: "Risk Analysis", path: "/risk-analysis" },

  { label: "Priority Queue", path: "/priority-queue" },

  { label: "Communication Center", path: "/communication" },

  { label: "AI Insights", path: "/ai-insights" },

  { label: "Reports", path: "/reports" },

  { label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 text-white min-h-screen p-6">
      <h2 className="text-4xl font-bold mb-10">DOCIP</h2>

      <div className="space-y-5">
        {sidebarMenus.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className="block hover:text-blue-300 transition py-2"
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
