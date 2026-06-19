export default function AiReplyBox() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">AI Suggested Reply</h2>

      <textarea
        rows={4}
        className="w-full border rounded p-3"
        defaultValue="Your account is under verification. Please allow some time."
      />
    </div>
  );
}
