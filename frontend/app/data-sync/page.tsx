import UploadCsv from "../../features/data-sync/components/UploadCsv";

import SummaryCards from "../../features/data-sync/components/SummaryCards";

import RecentUploads from "../../features/data-sync/components/RecentUploads";

export default function DataSyncPage() {
  return (
    <main className="p-8 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Data Sync Center</h1>

      <div className="space-y-6">
        <UploadCsv />

        <SummaryCards />

        <RecentUploads />
      </div>
    </main>
  );
}
