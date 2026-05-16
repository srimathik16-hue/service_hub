import { useState } from "react";

function Admin() {

  const isAdmin =
    localStorage.getItem("isAdmin");

  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );

  const updateStatus = (index) => {

    const updatedBookings = [...bookings];

    updatedBookings[index].status =
      updatedBookings[index].status === "Pending"
        ? "Completed"
        : "Pending";

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  return (
    <div className="admin">

      <h1>Service Status</h1>

      <table>

        <thead>

          <tr>

            <th>Customer</th>

            <th>Phone</th>

            <th>Service</th>

            <th>Status</th>

            {isAdmin && <th>Action</th>}

          </tr>

        </thead>

        <tbody>

          {bookings.map((item, index) => (

            <tr key={index}>

              <td>{item.customerName}</td>

              <td>{item.phoneNumber}</td>

              <td>{item.serviceName}</td>

              <td>{item.status}</td>

              {isAdmin && (

                <td>

                  <button
                    onClick={() =>
                      updateStatus(index)
                    }
                  >
                    Change Status
                  </button>

                </td>

              )}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Admin;