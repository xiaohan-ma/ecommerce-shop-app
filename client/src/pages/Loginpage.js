import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { userLogin } from "../plugin/Users";
import "../stylesheets/Loginpage.css";

const Loginpage = () => {
  const navigate = useNavigate();

  // Login state variables
  const [userInfo, setUserInfo] = useState({
    username: undefined,
    password: undefined,
  });

  const { setState, loading, error } = useContext(AuthContext);

  // Handle input changes
  function handleChange(event) {
    setUserInfo((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  }

  // Handle login button event
  async function login(event) {
    event.preventDefault();
    setState({ type: "LOGING_PENDING" });
    try {
      const res = await userLogin(userInfo);
      setState({ type: "LOGIN_SUCCESS", payload: res.details });
      navigate("/");
    } catch (error) {
      setState({ type: "LOGIN_FAILED", payload: error.response.data });
    }
  }

  return (
    <div className="container">
      <div className="loginContainer">
        <div id="usernameSec">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
            required
          />
        </div>
        <div id="passwordSec">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="text"
            placeholder="password"
            onChange={handleChange}
            required
          />
        </div>
        <button id="loginBtn" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Loginpage;
