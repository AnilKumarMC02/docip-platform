type Props = {
  data: Record<string, any>[];
};

export default function SummaryCards({ data }: Props) {
  const totalDrivers = data.length;

  const driverDocsPending = data.filter(
    (driver) => driver["Verification Driver Doc Status"] !== "Approved",
  ).length;

  const vehicleDocsPending = data.filter(
    (driver) => driver["Verification Vehicle Doc Status"] !== "Approved",
  ).length;

  const readyForApproval = data.filter(
    (driver) =>
      driver["Verification Driver Doc Status"] === "Approved" &&
      driver["Verification Vehicle Doc Status"] === "Approved",
  ).length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-gray-500">👥 Total Drivers</p>

        <h3 className="text-3xl font-bold">{totalDrivers}</h3>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-gray-500">📄 Driver Docs Pending</p>

        <h3 className="text-3xl font-bold">{driverDocsPending}</h3>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-gray-500">🚗 Vehicle Pending</p>

        <h3 className="text-3xl font-bold">{vehicleDocsPending}</h3>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-gray-500">✅ Ready To Approve</p>

        <h3 className="text-3xl font-bold">{readyForApproval}</h3>
      </div>
    </div>
  );
}
