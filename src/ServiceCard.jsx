import { useState } from "react";

function ServiceCard({ service }) {

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleBooking = () => {

    const bookingData = {
      customerName: name,
      phoneNumber: phone,
      address: address,
      serviceName: service.name,
      servicePrice: service.price,
    };

    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(bookingData);

    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

    alert("Booking Confirmed");

    setShowForm(false);

    setName("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="card">

      <img
        src={service.image}
        alt={service.name}
      />

      <h3>{service.name}</h3>

      <p>{service.price}</p>

      <button
        onClick={() => setShowForm(true)}
      >
        Book Now
      </button>

      {showForm && (

        <div className="booking-form">

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
          ></textarea>

          <button onClick={handleBooking}>
            Confirm Booking
          </button>

        </div>

      )}

    </div>
  );
}

export default ServiceCard;