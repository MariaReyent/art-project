import search from "../images/search.png";
import { useState } from "react";

function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navigation">
      <div className="navigation__links">
        <a href="#" className="navigation__links-list">
          Visit
        </a>
        <a href="#" className="navigation__links-list">
          Exhibitions
        </a>
        <a href="#" className="navigation__links-list">
          Programs
        </a>
        <a href="#" className="navigation__links-list">
          Collections
        </a>
        <a href="#" className="navigation__links-list">
          Membership
        </a>
        <a href="#" className="navigation__links-list">
          Give
        </a>
        <a href="#" className="navigation__links-list">
          Shop
        </a>
      </div>
      <div className="navigation__search">
        <input
          type="text"
          className={`navigation__search-input ${
            isExpanded ? "navigation__search-input--large" : ""
          }`}
          placeholder="Search"
        ></input>
        <button className="navigation__search-btn" onClick={handleClick}>
          <img src={search} alt="" className="navigation__search-icon" />
        </button>
      </div>
      <div className="navigation__schedule">
        <div className="navigation__schedule-label">Today's Hours:</div>
        <div className="navigation__schedule-time"> 10:00am-8:00pm</div>
      </div>
    </nav>
  );
}

export default Nav;
