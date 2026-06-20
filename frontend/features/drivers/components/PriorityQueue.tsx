import { drivers } from "@/data/drivers";

export default function PriorityQueue() {
  const sortedDrivers = [...drivers].sort(
    (a, b) => a.healthScore - b.healthScore,
  );

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">🚨 Priority Queue</h2>

      <div className="space-y-6">
        {sortedDrivers.map((driver, index) => (
          <div key={driver.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-semibold text-lg">
                  {index + 1}. {driver.name}
                </p>

                <p className="text-sm text-gray-500">{driver.driverCode}</p>
              </div>

              <span className="font-bold">{driver.healthScore}/100</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <a
                href={driver.dashboardUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center h-12 bg-green-600 text-white rounded-lg"
              >
                Dashboard
              </a>

              <a
                href={`tel:${driver.mobile}`}
                className="flex items-center justify-center h-12 bg-blue-600 text-white rounded-lg"
              >
                📞 Call
              </a>

              <a
                href={`https://wa.me/91${driver.mobile}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center h-12 bg-green-500 text-white rounded-lg"
              >
                🟢 WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
