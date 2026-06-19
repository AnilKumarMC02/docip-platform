export default function SearchDriver() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Search Driver</h2>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter mobile number"
          className="border p-3 rounded w-full"
        />

        <button className="bg-blue-600 text-white px-6 rounded">Search</button>
      </div>
    </div>
  );
}
