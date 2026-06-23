type Props = {
  data: Record<string, any>[];
};

export default function AutoAIInsights({ data }: Props) {
  const driverDocsPending = data.filter(
    (driver) => driver["Verification Driver Doc Status"] !== "Approved",
  ).length;

  const vehicleDocsPending = data.filter(
    (driver) => driver["Verification Vehicle Doc Status"] !== "Approved",
  ).length;

  const negativeWallet = data.filter(
    (driver) => Number(driver["Wallet Balance"]) < 0,
  ).length;

  const readyForApproval = data.filter(
    (driver) =>
      driver["Verification Driver Doc Status"] === "Approved" &&
      driver["Verification Vehicle Doc Status"] === "Approved",
  ).length;

  const immediateAttention =
    driverDocsPending + vehicleDocsPending + negativeWallet;

  return (
    <div className="mt-8 bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">🤖 AI Insights</h2>

      <div className="space-y-4">
        <div className="bg-red-50 p-4 rounded-lg">
          🚨 {immediateAttention}
          driver(s) need immediate attention
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          📄 {driverDocsPending}
          driver(s) have pending documents
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          🚗 {vehicleDocsPending}
          driver(s) have vehicle pending
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          💰 {negativeWallet}
          driver(s) have negative wallet balance
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          ✅ {readyForApproval}
          driver(s) are ready for approval
        </div>
      </div>
    </div>
  );
}
