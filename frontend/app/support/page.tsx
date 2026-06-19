import SearchDriver from "../../features/support/components/SearchDriver";

import DriverDetails from "../../features/support/components/DriverDetails";

import AiReplyBox from "../../features/support/components/AiReplyBox";

import SupportNotes from "../../features/support/components/SupportNotes";

export default function SupportPage() {
  return (
    <main className="p-8 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Support Workspace</h1>

      <div className="space-y-6">
        <SearchDriver />

        <DriverDetails />

        <AiReplyBox />

        <SupportNotes />
      </div>
    </main>
  );
}
