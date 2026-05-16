function Home() {

  return (
    <div className="home">

      <h1>Welcome to ServiceHub</h1>

      <p>
        Trusted home services at your doorstep.
      </p>

      <div className="home-services">

        <div className="home-card">
          <h2>Plumbing</h2>
          <p>
            Expert plumbing solutions for homes.
          </p>
        </div>

        <div className="home-card">
          <h2>Electrician</h2>
          <p>
            Safe and professional electrical work.
          </p>
        </div>

        <div className="home-card">
          <h2>AC Repair</h2>
          <p>
            Fast AC installation and repair services.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;