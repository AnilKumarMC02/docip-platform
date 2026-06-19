export default function UploadCsv() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Driver CSV</h2>

      <div className="flex gap-4">
        <input type="file" accept=".csv" />

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Upload
        </button>
      </div>
    </div>
  );
}
