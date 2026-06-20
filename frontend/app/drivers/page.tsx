import DriverTable from "../../features/drivers/components/DriverTable";
import PriorityQueue from "@/features/drivers/components/PriorityQueue";
import AIInsights from "@/features/drivers/components/AIInsights";

export default function DriversPage() {
  return (
    <main className="p-8 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Driver Intelligence</h1>

      <DriverTable />
      <PriorityQueue />
      <AIInsights />
    </main>
  );
}
