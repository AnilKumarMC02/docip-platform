"use client";

import { drivers } from "@/data/drivers";
import { useState } from "react";

type Driver = {
  id: number;
  name: string;
  driverCode: string;
  mobile: string;
  city: string;
  status: string;
  dashboardUrl: string;
};

export default function SearchDriver() {
  const [searchType, setSearchType] = useState("mobile");

  const [searchValue, setSearchValue] = useState("");

  const [result, setResult] = useState<Driver | null>(null);

  const [error, setError] = useState("");

  const handleSearch = () => {
    setError("");

    const driver = drivers.find((driver) => {
      if (searchType === "mobile") {
        return driver.mobile === searchValue;
      }

      return driver.driverCode === searchValue;
    });

    if (!driver) {
      setResult(null);

      setError("Driver not found");

      return;
    }

    setResult(driver);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Search Driver</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border rounded-lg p-3 md:w-52"
        >
          <option value="mobile">Mobile Number</option>

          <option value="driverId">Driver ID</option>
        </select>

        <input
          type="text"
          placeholder={
            searchType === "mobile" ? "Enter mobile number" : "Enter driver ID"
          }
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);

            setResult(null);

            setError("");
          }}
          className="border rounded-lg p-3 flex-1"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {error && (
        <div className="mt-4 bg-red-100 text-red-700 p-3 rounded-lg">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-8 bg-green-50 rounded-xl shadow p-6">
          <h3 className="text-2xl font-bold mb-6">Driver Found</h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Name</p>

              <p className="font-semibold">{result.name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Driver ID</p>

              <p className="font-semibold">{result.driverCode}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Mobile</p>

              <p className="font-semibold">{result.mobile}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Status</p>

              <p className="font-semibold">{result.status}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <a
              href={result.dashboardUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center h-14 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Dashboard
            </a>

            <a
              href={`tel:${result.mobile}`}
              className="flex items-center justify-center h-14 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              📞 Call
            </a>

            <a
              href={`https://wa.me/91${result.mobile}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center h-14 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              🟢 WhatsApp
            </a>

            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(result.mobile);

                  alert("Number copied successfully!");
                } catch {
                  alert("Copy failed");
                }
              }}
              className="flex items-center justify-center h-14 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              📋 Copy
            </button>
          </div>

          <div className="mt-8 border-t pt-4">
            <p className="text-gray-700">
              📞 Driver Number:
              <strong> {result.mobile}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
