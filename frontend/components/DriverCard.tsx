import StatusBadge from "./StatusBadge";
import HealthBadge from "./HealthBadge";

type Props = {
  name: string;
  driverCode: string;
  mobile: string;
  status: string;
  healthScore: number;
};

export default function DriverCard({
  name,
  driverCode,
  mobile,
  status,
  healthScore,
}: Props) {
  return (
    <div className="bg-green-50 rounded-xl shadow p-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-500">Name</p>

          <p className="font-semibold">{name}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Driver ID</p>

          <p className="font-semibold">{driverCode}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Mobile</p>

          <p className="font-semibold">{mobile}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Status</p>

          <StatusBadge status={status} />
        </div>

        <div>
          <p className="text-sm text-gray-500">Health Score</p>

          <p className="font-semibold">{healthScore}/100</p>
        </div>
      </div>

      <div className="mt-6">
        <HealthBadge healthScore={healthScore} />
      </div>
    </div>
  );
}
