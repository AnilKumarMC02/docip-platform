import SearchDriver from "@/features/support/components/SearchDriver";

export default function ApprovalAssistantPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold">Driver Approval Assistant</h1>

        <p className="text-gray-500 mt-2">
          Search a driver and verify approval requirements.
        </p>
      </div>

      <SearchDriver />
    </div>
  );
}
