"use client";

import { drivers } from "@/data/drivers";
import { useState } from "react";

export default function SearchDriver() {
  const [searchType, setSearchType] = useState("mobile");

  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleSearch = () => {
    const driver = drivers.find((driver) => {
      if (searchType === "mobile") {
        return driver.mobile === searchValue;
      }

      return driver.driverCode === searchValue;
    });

    setResult(driver || null);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Search Driver</h2>

      <div className="flex gap-4 mb-4">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border p-3 rounded"
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
          onChange={(e) => setSearchValue(e.target.value)}
          className="border p-3 rounded w-full"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 rounded"
        >
          Search
        </button>
      </div>

      <div className="text-sm text-gray-500">
        Search Type : {searchType}
        <br />
        Value : {searchValue}
      </div>

      {result && (
        <div className="mt-6 bg-green-50 p-4 rounded">
          <h3 className="font-semibold mb-2">Driver Found</h3>

          <p>Name : {result.name}</p>

          <p>Driver ID : {result.driverCode}</p>

          <p>Mobile : {result.mobile}</p>

          <p>Status : {result.status}</p>

          <a
            href={result.dashboardUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Review In Dashboard
          </a>
        </div>
      )}
    </div>
  );
}
