import Link from "next/link";

const sidebarMenus = [
  { label: "Overview", path: "/" },
  { label: "Support Workspace", path: "/support" },
  { label: "Telecaller Assistant", path: "/telecaller" },
  { label: "Approval Assistant", path: "/approval-assistant" },
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
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-950 text-white p-6 overflow-y-auto">
      <h2 className="text-4xl font-bold mb-10">DOCIP</h2>

      <div className="space-y-5">
        {sidebarMenus.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className="block rounded-lg px-3 py-2 hover:bg-slate-800 transition"
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
