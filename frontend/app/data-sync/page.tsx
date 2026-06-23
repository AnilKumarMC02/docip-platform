"use client";

import { useState } from "react";
import Papa, { ParseResult } from "papaparse";

import CsvPreview from "@/features/data-sync/components/CsvPreview";
import { calculateHealthScore } from "@/utils/calculateHealthScore";
import SummaryCards from "@/features/data-sync/components/SummaryCards";
import AutoAIInsights from "@/features/data-sync/components/AutoAIInsights";
import ExportReport from "@/features/data-sync/components/ExportReport";

export default function DataSyncPage() {
  const [message, setMessage] = useState("");

  const [csvData, setCsvData] = useState<any[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");

    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      setMessage("❌ Please upload a CSV file.");

      return;
    }

    Papa.parse(file, {
      header: true,

      skipEmptyLines: true,

      complete: (results: ParseResult<any>) => {
        const updatedData = (results.data as Record<string, string>[]).map(
          (driver) => ({
            ...driver,

            healthScore: calculateHealthScore(driver),
          }),
        );

        setCsvData(updatedData);

        setMessage(`✅ ${file.name} uploaded successfully.`);
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-8">
      <h1 className="text-4xl font-bold mb-2">Data Sync Center</h1>

      <p className="text-gray-500 mb-8">
        Upload your driver CSV file to sync and process driver data.
      </p>

      <div className="border-2 border-dashed border-blue-400 rounded-2xl p-12 text-center">
        <div className="text-7xl mb-6">☁️</div>

        <h2 className="text-3xl font-semibold mb-4">Upload Driver CSV</h2>

        <p className="text-gray-500 mb-8">
          Drag and drop your CSV file here or click below
        </p>

        <input
          id="csv-upload"
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="hidden"
        />

        <label
          htmlFor="csv-upload"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl cursor-pointer transition"
        >
          ⬆️ Choose CSV File
        </label>

        <p className="text-sm text-gray-400 mt-4">
          Only .csv files are allowed
        </p>

        {message && (
          <div className="mt-8">
            <div className="inline-block bg-gray-100 px-6 py-3 rounded-xl">
              {message}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-blue-50 rounded-xl p-6">
        <h3 className="font-semibold mb-3">ℹ️ Required CSV Columns</h3>

        <div className="flex flex-wrap gap-3">
          <span className="bg-white px-4 py-2 rounded-lg shadow">
            driverCode
          </span>

          <span className="bg-white px-4 py-2 rounded-lg shadow">name</span>

          <span className="bg-white px-4 py-2 rounded-lg shadow">mobile</span>

          <span className="bg-white px-4 py-2 rounded-lg shadow">city</span>

          <span className="bg-white px-4 py-2 rounded-lg shadow">status</span>
        </div>
      </div>
      {csvData.length > 0 && <SummaryCards data={csvData} />}

      {csvData.length > 0 && <CsvPreview data={csvData} />}
      {csvData.length > 0 && <AutoAIInsights data={csvData} />}
      {csvData.length > 0 && <ExportReport data={csvData} />}
    </div>
  );
}
