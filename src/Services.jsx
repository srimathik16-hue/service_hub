import servicesdata from "./servicedata";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="services-container">

      <h1>Our Services</h1>

      <div className="services-grid">

        {servicesdata.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}

      </div>

    </div>
  );
}

export default Services;