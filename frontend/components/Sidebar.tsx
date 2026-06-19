import { sidebarMenus } from "../utils/constants";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-10">DOCIP</h2>

      <ul className="space-y-5">
        {sidebarMenus.map((menu) => (
          <li
            key={menu}
            className="cursor-pointer hover:text-blue-300 transition"
          >
            {menu}
          </li>
        ))}
      </ul>
    </aside>
  );
}
