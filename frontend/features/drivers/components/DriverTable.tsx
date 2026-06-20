import { drivers } from "../../../data/drivers";
import StatusBadge from "@/components/StatusBadge";

export default function DriverTable() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Name</th>

              <th className="text-left py-3 px-4">Driver Code</th>

              <th className="text-left py-3 px-4">Mobile</th>

              <th className="text-left py-3 px-4">City</th>

              <th className="text-left py-3 px-4 whitespace-nowrap">Status</th>
            </tr>
          </thead>

          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{driver.name}</td>

                <td className="py-3 px-4">{driver.driverCode}</td>

                <td className="py-3 px-4">{driver.mobile}</td>

                <td className="py-3 px-4">{driver.city}</td>

                <td className="py-3 px-4 whitespace-nowrap">
                  <StatusBadge status={driver.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
