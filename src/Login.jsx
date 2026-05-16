import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "1234"
    ) {

      localStorage.setItem("isAdmin", "true");

      navigate("/admin");

    }

    else if (
      email === "user@gmail.com" &&
      password === "1111"
    ) {

      localStorage.setItem("isUser", "true");

      navigate("/dashboard");

    }

    else {

      alert("Invalid Email or Password");

    }
  };

  return (
    <div className="login-container">

      <form
        onSubmit={handleLogin}
        className="login-form"
      >

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;