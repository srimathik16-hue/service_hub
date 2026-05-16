function Dashboard() {

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  return (
    <div className="dashboard">

      <h1>User Dashboard</h1>

      <h2>Total Bookings: {bookings.length}</h2>

      <div className="dashboard-cards">

        {bookings.map((item, index) => (

          <div
            key={index}
            className="dash-card"
          >

            <h3>{item.serviceName}</h3>

            <p>{item.servicePrice}</p>

            <p>{item.customerName}</p>

            <p>{item.phoneNumber}</p>

            <p>{item.address}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;