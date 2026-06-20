type Props = {
  status: string;
};

export default function StatusBadge({ status }: Props) {
  const getStyles = () => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Vehicle Pending":
        return "bg-orange-100 text-orange-700";

      case "Documents Pending":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${getStyles()}`}
    >
      {status}
    </span>
  );
}
