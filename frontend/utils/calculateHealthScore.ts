export function calculateHealthScore(driver: Record<string, any>) {
  let score = 100;

  if (driver["Verification Driver Doc Status"] !== "Approved") {
    score -= 20;
  }

  if (driver["Verification Vehicle Doc Status"] !== "Approved") {
    score -= 20;
  }

  if (Number(driver["Wallet Balance"]) < 0) {
    score -= 10;
  }

  if (Number(driver["Completed Trips"]) === 0) {
    score -= 10;
  }

  if (driver["Current Status"] !== "Active") {
    score -= 20;
  }

  return Math.max(score, 0);
}
