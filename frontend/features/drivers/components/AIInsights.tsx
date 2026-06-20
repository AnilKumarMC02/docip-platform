import { drivers } from "@/data/drivers";

export default function AIInsights() {
  const readyToApprove = drivers.filter((driver) => driver.healthScore >= 90);

  const reviewRequired = drivers.filter(
    (driver) => driver.healthScore >= 70 && driver.healthScore < 90,
  );

  const immediateAttention = drivers.filter(
    (driver) => driver.healthScore < 70,
  );

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">🤖 AI Insights</h2>

      <div className="space-y-4">
        <div className="bg-red-50 p-4 rounded-lg">
          🚨 {immediateAttention.length} driver(s) need immediate attention
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          ⚠️ {reviewRequired.length} driver(s) need review
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          ✅ {readyToApprove.length} driver(s) are ready for approval
        </div>
      </div>
    </div>
  );
}
