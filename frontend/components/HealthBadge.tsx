type Props = {
  healthScore: number;
};

export default function HealthBadge({ healthScore }: Props) {
  if (healthScore >= 90) {
    return (
      <span className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full">
        ✅ Ready To Approve
      </span>
    );
  }

  if (healthScore >= 70) {
    return (
      <span className="inline-flex items-center bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
        ⚠️ Review Required
      </span>
    );
  }

  return (
    <span className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full">
      🚨 Immediate Attention
    </span>
  );
}
