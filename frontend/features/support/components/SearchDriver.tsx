"use client";

import { drivers } from "@/data/drivers";
import { useState } from "react";

import { Driver } from "@/types/driver";
import HealthBadge from "@/components/HealthBadge";
import ActionButton from "@/components/ActionButton";
import DriverCard from "@/components/DriverCard";

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
  const getApprovalStatus = (driver: Driver) => {
    const missing = [
      !driver.driverDocuments,
      !driver.vehicleAdded,
      !driver.vehicleDocuments,
    ].filter(Boolean).length;

    if (missing === 0) {
      return {
        text: "🟢 Ready for Approval",
        color: "text-green-600",
      };
    }

    if (missing === 3) {
      return {
        text: "🔴 Pending Approval",
        color: "text-red-600",
      };
    }

    return {
      text: "🟡 Incomplete Profile",
      color: "text-yellow-600",
    };
  };
  <h3 className="text-2xl font-bold mb-6">Driver Found</h3>;

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
        <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-200 p-8">
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

            <div>
              <p className="text-sm text-gray-500">Health Score</p>

              <p className="font-semibold">{result.healthScore}/100</p>
            </div>
            <div className="mt-6">
              <HealthBadge healthScore={result.healthScore} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <ActionButton
              label="Dashboard"
              href={result.dashboardUrl}
              color="bg-green-600 hover:bg-green-700"
            />

            <ActionButton
              label="📞 Call"
              href={`tel:${result.mobile}`}
              color="bg-blue-600 hover:bg-blue-700"
            />

            <ActionButton
              label="🟢 WhatsApp"
              href={`https://wa.me/91${result.mobile}?text=${encodeURIComponent(
                !result.driverDocuments &&
                  !result.vehicleAdded &&
                  !result.vehicleDocuments
                  ? `Hello,

Your account approval is pending.

Please complete the following:

📄 Upload driver documents

🚗 Add your vehicle

🪪 Upload vehicle documents

- Towner Support`
                  : !result.driverDocuments
                    ? `Hello,

Please upload your driver documents.

- Towner Support`
                    : !result.vehicleAdded
                      ? `Hello,

Please add your vehicle details.

- Towner Support`
                      : !result.vehicleDocuments
                        ? `Hello,

Please upload vehicle documents.

- Towner Support`
                        : `Hello,

Your profile is complete and ready for review.

- Towner Support`,
              )}`}
              color="bg-green-500 hover:bg-green-600"
            />

            <ActionButton
              label="📋 Copy"
              color="bg-indigo-600 hover:bg-indigo-700"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(result.mobile);

                  alert("Number copied successfully!");
                } catch {
                  alert("Copy failed");
                }
              }}
            />
          </div>

          <div className="mt-8 border-t pt-4">
            <p className="text-gray-700">
              📞 Driver Number:
              <strong> {result.mobile}</strong>
            </p>
          </div>
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold mb-4">Approval Checklist</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>📄 Driver Documents</span>

                <span>
                  {result.driverDocuments ? "✅ Uploaded" : "❌ Missing"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>🚗 Vehicle Added</span>

                <span>{result.vehicleAdded ? "✅ Added" : "❌ Not Added"}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>🪪 Vehicle Documents</span>

                <span>
                  {result.vehicleDocuments ? "✅ Uploaded" : "❌ Missing"}
                </span>
              </div>
            </div>
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-bold mb-4">💬 Suggested Reply</h3>

              <div className="bg-gray-100 rounded-xl p-5">
                <p className="whitespace-pre-line text-gray-700">
                  {!result.driverDocuments &&
                  !result.vehicleAdded &&
                  !result.vehicleDocuments
                    ? `Hello,

Your account approval is pending.

Please complete the following:

📄 Upload driver documents

🚗 Add your vehicle

🪪 Upload vehicle documents

- Towner Support`
                    : !result.driverDocuments
                      ? `Hello,

Please upload your driver documents.

- Towner Support`
                      : !result.vehicleAdded
                        ? `Hello,

Please add your vehicle details.

- Towner Support`
                        : !result.vehicleDocuments
                          ? `Hello,

Please upload vehicle documents.

- Towner Support`
                          : `Hello,

Your profile is complete and ready for review.

- Towner Support`}
                </p>
              </div>
            </div>
            <button
              onClick={async () => {
                try {
                  let reply = "";

                  if (
                    !result.driverDocuments &&
                    !result.vehicleAdded &&
                    !result.vehicleDocuments
                  ) {
                    reply = `Hello,

Your account approval is pending.

Please complete the following:

📄 Upload driver documents

🚗 Add your vehicle

🪪 Upload vehicle documents

- Towner Support`;
                  } else if (!result.driverDocuments) {
                    reply = `Hello,

Please upload your driver documents.

- Towner Support`;
                  } else if (!result.vehicleAdded) {
                    reply = `Hello,

Please add your vehicle details.

- Towner Support`;
                  } else if (!result.vehicleDocuments) {
                    reply = `Hello,

Please upload vehicle documents.

- Towner Support`;
                  } else {
                    reply = `Hello,

Your profile is complete and ready for review.

- Towner Support`;
                  }

                  await navigator.clipboard.writeText(reply);

                  alert("Reply copied successfully!");
                } catch {
                  alert("Copy failed");
                }
              }}
              className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              📋 Copy Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
