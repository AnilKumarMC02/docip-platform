export default function SummaryCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-xl shadow p-4">
        Total Drivers
        <h3 className="text-2xl font-bold">50,000</h3>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        Pending Docs
        <h3 className="text-2xl font-bold">4,200</h3>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        Vehicle Pending
        <h3 className="text-2xl font-bold">3,100</h3>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        Ready To Approve
        <h3 className="text-2xl font-bold">12,500</h3>
      </div>
    </div>
  );
}
