import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-8 bg-slate-100 min-h-screen">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DashboardCard title="Total Drivers" value="50,000" />

            <DashboardCard title="Pending Documents" value="4,200" />

            <DashboardCard title="Vehicle Pending" value="3,100" />
          </div>
        </main>
      </div>
    </div>
  );
}
