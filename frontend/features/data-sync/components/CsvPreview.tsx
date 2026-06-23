type Props = {
  data: Record<string, any>[];
};

export default function CsvPreview({ data }: Props) {
  const columns = [
    "Driver Code",

    "Personal Full Name",

    "Personal Phone Encrypted",

    "Service Area City Name",

    "Current Status",

    "Verification Driver Doc Status",

    "Verification Vehicle Doc Status",

    "Wallet Balance",

    "Completed Trips",

    "healthScore",
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">CSV Preview</h2>

      <p className="mb-4">
        Total Records:
        <strong> {data.length}</strong>
      </p>

      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column) => (
                <th key={column} className="text-left p-4 whitespace-nowrap">
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.slice(0, 5).map((driver, index) => (
              <tr key={index} className="border-b">
                {columns.map((column) => (
                  <td key={column} className="p-4 whitespace-nowrap">
                    {driver[column] ?? "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
