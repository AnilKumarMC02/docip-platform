export function getDriverStage(driver: Record<string, any>) {
  const driverDoc = driver["Verification Driver Doc Status"];

  const vehicleDoc = driver["Verification Vehicle Doc Status"];

  if (driverDoc !== "Approved" && vehicleDoc !== "Approved") {
    return "🚨 Both Documents Pending";
  }

  if (driverDoc !== "Approved") {
    return "📄 Driver Documents Pending";
  }

  if (vehicleDoc !== "Approved") {
    return "🚗 Vehicle Documents Pending";
  }

  return "✅ Ready For Approval";
}
