import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div className="header">
      <div className="header__link">
        <a href="#" className="header__link-buttons">
          Log in
        </a>
        <a href="#" className="header__link-buttons">
          View cart
        </a>
      </div>
      <div className={`header__title ${scroll ? `scrolled` : ""}`}>
        <div className="header__title-1"> MFABoston</div>
        <button className="header__button-1">Get Tickets</button>
        <button className="header__button-2">Join Today</button>
      </div>
    </div>
  );
}

export default Header;
