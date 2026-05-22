import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const loginLogics = (loginData) => {
  const registeredUsers =
    JSON.parse(localStorage.getItem("users")) || [];

  if (registeredUsers.length === 0) {
    alert("No users found. Please register first.");
    return;
  }

  const validUser = registeredUsers.find(
    (user) =>
      user.email.trim().toLowerCase() ===
        loginData.email.trim().toLowerCase() &&
      user.password === loginData.password
  );

  if (validUser) {
    alert("Login Successful");

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(validUser)
    );

    navigate("/orders");
  } else {
    alert("Invalid email or password");
  }
};

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back</h1>
        <p>Login to continue your fitness journey 💪</p>

        <form onSubmit={handleSubmit(loginLogics)}>

          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;