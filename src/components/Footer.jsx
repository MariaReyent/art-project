import ico1 from "../images/ico1.png";
import ico2 from "../images/ico2.png";
import ico3 from "../images/ico3.png";
import ico4 from "../images/ico4.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-1-of-4">
          <h2 className="footer__link-header">Visit us</h2>
          <a className="footer__link-1" href="#">
            {" "}
            465 Huntington Avenue Boston, Massachusetts 02115
          </a>

          <a className="footer__link-3" href="#">
            617-267-9300
          </a>
          <button className="footer__link-btn1">Plan Your Visit</button>
        </div>
        <div className="col-1-of-4">
          <h2 className="footer__link-header">Connect with us</h2>
          <div className="footer__socials">
            <a href="https://www.facebook.com/mfaboston">
              {" "}
              <img
                src={ico4}
                alt="facebook icon"
                className="footer__socials-icons"
              />
            </a>
            <a href="https://x.com/mfaboston">
              <img
                src={ico1}
                alt="twitter icon"
                className="footer__socials-icons"
              />
            </a>
            <a href="https://www.instagram.com/mfaboston/">
              <img
                src={ico3}
                alt="instagram icon"
                className="footer__socials-icons"
              />
            </a>
            <a href="https://www.youtube.com/mfaboston">
              <img
                src={ico2}
                alt="youtube icon"
                className="footer__socials-icons"
              />
            </a>
          </div>
        </div>
        <div className="col-1-of-4">
          <h2 className="footer__link-header">Sign up for MFA email</h2>
          <p className="footer__paragr">
            Get updates on what’s happening at the MFA, from exhibitions and
            programs to special events and more.
          </p>
          <form
            action="/"
            method="post"
            id="footer-api-email"
            acceptCharset="UTF-8"
          >
            <label htmlFor="footer__email" className="footer__email-label">
              E-mail{" "}
            </label>
            <input
              type="email"
              id="footer__email"
              name="email"
              className="footer__email"
            ></input>
            <p className="footer__paragr-2">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy">Privacy Policy</a>
              and{" "}
              <a href="https://policies.google.com/terms">
                Terms of Service
              </a>{" "}
              apply.
            </p>
            <button type="submit" className="footer__link-btn1">
              Submit
            </button>
          </form>
        </div>
        <div className="col-1-of-4">
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#">About</a>
            </li>
            <li className="footer__list-item">
              <a href="#">Working at the MFA</a>
            </li>
            <li className="footer__list-item">
              <a href="#">Press</a>
            </li>
            <li className="footer__list-item">
              <a href="#">Annual Report</a>
            </li>
            <li className="footer__list-item">
              <a href="#">Contact</a>
            </li>
            <li className="footer__list-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="footer__list-item">
              <a href="#">Terms of Use</a>
            </li>
            <li className="footer__list-item">
              <a href="#">Accessibility</a>
            </li>
            <li className="footer__list-item">
              <a href="#">Translate</a>
            </li>
          </ul>
          <p className="footer__list-trademark">
            © 2024 Museum of Fine Arts Boston
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
