import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import "../stylesheets/Accountpage.css";

const Accountpage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container">
      <div className="accountContainer">
        <div id="line"></div>
        <h1>Your online portal</h1>
        <div id="line"></div>
        <div className="accountInfo">
          <div className="options">
            <h3>Hi, {user.firstName}!</h3>
            <ul>
              <li>Account overview</li>
              <li>My details</li>
              <li>Address book</li>
              <li>Payment methods</li>
              <li>Social accounts</li>
            </ul>
            <ul>
              <li>Need help?</li>
              <li>How do I make a return?</li>
              <li>I need new returns notice</li>
            </ul>
          </div>
          <div className="pastOrderSection">
            <h3>Past orders</h3>
            <div id="pastOrder"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountpage;
