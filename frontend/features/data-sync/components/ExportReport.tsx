type Props = {
  data: Record<string, any>[];
};

export default function ExportReport({ data }: Props) {
  const exportCsv = () => {
    if (!data.length) return;

    const headers = Object.keys(data[0]);

    const rows = data.map((row) =>
      headers.map((header) => row[header]).join(","),
    );

    const csvContent = [headers.join(","), ...rows].join("\n");

    const blob = new Blob(
      [csvContent],

      { type: "text/csv" },
    );

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "docip-report.csv";

    link.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-8">
      <button
        onClick={exportCsv}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
      >
        📥 Export Report
      </button>
    </div>
  );
}
