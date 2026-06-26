"use client";

export default function GenerateReply() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">💬 Generate Reply</h2>

      <div className="bg-gray-50 rounded-xl p-6">
        <p className="whitespace-pre-line">Reply will appear here...</p>
      </div>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
        📋 Copy Reply
      </button>
    </div>
  );
}
