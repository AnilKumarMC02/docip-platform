import CallDriver from "../../features/telecaller/components/CallDriver";

import CallNotes from "../../features/telecaller/components/CallNotes";

import FollowUp from "../../features/telecaller/components/FollowUp";

export default function TelecallerPage() {
  return (
    <main className="p-8 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Telecaller Assistant</h1>

      <div className="space-y-6">
        <CallDriver />

        <CallNotes />

        <FollowUp />
      </div>
    </main>
  );
}
