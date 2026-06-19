"use client";

import { useState } from "react";

export default function SupportNotes() {
  const [note, setNote] = useState("");

  const [notes, setNotes] = useState<string[]>([]);

  const saveNote = () => {
    if (!note.trim()) return;

    const currentDate = new Date().toLocaleString();

    setNotes((prev) => [`${currentDate} - ${note}`, ...prev]);

    setNote("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">Support Notes</h2>

      <textarea
        rows={4}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Example: Driver said RC will be uploaded tomorrow"
        className="w-full border rounded-lg p-4"
      />

      <button
        onClick={saveNote}
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        💾 Save Note
      </button>

      {notes.length > 0 && (
        <div className="mt-8">
          <h3 className="font-semibold mb-4">Notes History</h3>

          <div className="space-y-3">
            {notes.map((item, index) => (
              <div key={index} className="bg-slate-100 p-3 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
