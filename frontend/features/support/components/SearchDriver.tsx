"use client";

import { useState } from "react";

export default function SearchDriver() {
  const [searchType, setSearchType] = useState("mobile");

  const [searchValue, setSearchValue] = useState("");

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

        <button className="bg-blue-600 text-white px-6 rounded">Search</button>
      </div>

      <div className="text-sm text-gray-500">
        Search Type : {searchType}
        <br />
        Value : {searchValue}
      </div>
    </div>
  );
}
