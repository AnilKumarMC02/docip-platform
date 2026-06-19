import { drivers } from "../../../data/drivers";

export default function DriverTable() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>

            <th>Driver Code</th>

            <th>Mobile</th>

            <th>City</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.driverCode}>
              <td>{driver.name}</td>

              <td>{driver.driverCode}</td>

              <td>{driver.mobile}</td>

              <td>{driver.city}</td>

              <td>{driver.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
