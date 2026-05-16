import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("isAdmin");

    localStorage.removeItem("isUser");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <h2>ServiceHub</h2>

      <div>

        <Link to="/">Home</Link>

        <Link to="/services">Services</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/admin">Admin</Link>

        <Link to="/login">Login</Link>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;