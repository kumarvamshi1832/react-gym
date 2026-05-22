import React from "react";
import { useForm } from "react-hook-form";
import "../styles/register.css";

function Register() {
  const { register, handleSubmit, reset } = useForm();

  const registerLogics = (userdata) => {
    // 🔥 Get existing users OR empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔥 Create clean user object
    const newUser = {
      name: userdata.name.trim(),
      email: userdata.email.trim().toLowerCase(),
      phone: userdata.phone,
      password: userdata.password,
    };

    // 🔴 OPTIONAL (PREVENT DUPLICATE EMAIL)
    const alreadyExists = users.find(
      (u) => u.email === newUser.email
    );

    if (alreadyExists) {
      alert("User already exists with this email!");
      return;
    }

    // 🔥 Add new user
    users.push(newUser);

    // 🔥 Save to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    console.log("Users saved:", users);

    alert("Registration successful!");

    // reset form
    reset();
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>
        <p>Join the fitness journey today 💪</p>

        <form onSubmit={handleSubmit(registerLogics)}>
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />

          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />

          <input
            type="number"
            placeholder="Phone Number"
            {...register("phone", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Register;