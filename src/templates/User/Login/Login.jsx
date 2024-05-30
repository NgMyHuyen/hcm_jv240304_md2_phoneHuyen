import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.scss";
import { login } from "../../../store/Slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameFromState = useSelector((state) => state.auth.username); // Add this line
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (username === "admin" && password === "12345") {
      dispatch(login({ username, password }));
      navigate("/adminweb");
    } else {
      const response = await axios.get(
        `http://localhost:3000/userList?username=${username}&password=${password}`
      );
      if (response.data.length > 0) {
        const user = response.data[0];
        if (user.password === password) {
          dispatch(login({ username, password }));
          navigate("/");
        } else {
          console.error("Incorrect password");
        }
      } else {
        console.error("Account does not exist");
      }
    }
  };

  return (
    <div className="login-form-container">
      <div className="wrapper">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* {errorMessage && <p className="error">{errorMessage}</p>} */}

          <a href="#">Forgot password?</a>
          <div>
            <p>
              Don't have an account? <Link to={"/signup"}>Register</Link>
            </p>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div>
          <i className="iconUser"></i>
          <span>{usernameFromState}</span> {/* Add this line */}
        </div>
      </div>
    </div>
  );
};

export default Login;
