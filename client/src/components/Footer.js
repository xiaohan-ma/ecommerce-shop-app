import "../stylesheets/Footer.css";
import Facebook from "../icons/Facebook.png";
import Instagram from "../icons/Instagram.png";
import Twitter from "../icons/Twitter.png";

function Footer() {
  return (
    <footer>
      <div className="footerInfo">
        <div>
          <h3>Delivery Info</h3>
          <p>
            Products are shipped on all business days, between 9am to 5pm. If
            you have not received your order please email us or give us a call.
          </p>
        </div>
        <div>
          <h3>Get Help</h3>
          <p>Available Mon to Fri, 9am to 5pm</p>
          <ul>
            <li>Telephone: 07938483493</li>
            <li>Email: goldenshoe@goldenshoe.com</li>
          </ul>
        </div>
        <div>
          <h3>About Golden Shoe</h3>
          <ul>
            <li>Our Story</li>
            <li>Careers & Culture</li>
          </ul>
        </div>
      </div>
      <div className="footerLinks">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <img alt="facebook link" src={Facebook} />
          </li>
          <li>
            <img alt="instagram link" src={Instagram} />
          </li>
          <li>
            <img alt="twitter link" src={Twitter} />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
