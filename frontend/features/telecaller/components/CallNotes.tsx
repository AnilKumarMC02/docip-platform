export default function CallNotes() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Call Notes</h2>

      <textarea
        rows={4}
        className="w-full border rounded p-3"
        placeholder="Add notes..."
      />
    </div>
  );
}
