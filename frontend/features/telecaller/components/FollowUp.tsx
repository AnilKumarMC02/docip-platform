export default function FollowUp() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Follow Up</h2>

      <select className="border rounded p-3 w-full">
        <option>Today</option>

        <option>Tomorrow</option>

        <option>Custom Date</option>
      </select>
    </div>
  );
}
