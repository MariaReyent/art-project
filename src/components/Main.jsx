import art from "../images/art.mp4";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import im2 from "../images/im2.jpg";
import im3 from "../images/im3.jpeg";
import im4 from "../images/im4.jpeg";
import im5 from "../images/im5.jpg";

import ev1 from "../images/ev1.jpg";
import ev2 from "../images/ev2.jpg";
import ev3 from "../images/ev3.jpg";
import mfa from "../images/mfa.jpg";

import CustomRightArrow from "./CustomRightArrow";
import CustomLeftArrow from "./CustomLeftArrow";

function Main() {
  const [clicked, setClicked] = useState(true);

  const handleButtonClick = () => {
    setClicked((prevState) => !prevState);
  };

  const slideImages = [
    { image: im2, title: "Art and Colors", open: "Now open" },
    { image: im3, title: "Art in Everyday life", open: "Now open" },
    { image: im4, title: "Tender loving caring", open: "Now open" },
    { image: im5, title: "Dress Up", open: "Now open" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <main>
      <section className="bg-video">
        <video className="bg-video__content " autoPlay loop muted>
          <source src={art} type="video/mp4" />
          Your browser is not supported
        </video>
      </section>
      <section className="lines">
        <div className="lines__top-line">Hallyu!The Korean Wave</div>
        <div className="lines__moving">
          <Marquee autoFill play={clicked}>
            <p className="lines__moving-words">Now open</p>
            <p className="lines__moving-words">Plan your visit</p>
          </Marquee>
        </div>
        <button className="btn-pause" onClick={handleButtonClick}>
          {" "}
          {clicked ? "▶" : "⏸"}
        </button>
      </section>
      <section className="slide">
        <span className="slide__title">On View</span>
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          centerMode={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index} className="slide__container">
              <img
                src={slideImage.image}
                alt={slideImage.title}
                className="slide__images"
              />
              <div className="slide__description">{slideImage.title}</div>
              <div className="slide__open">{slideImage.open}</div>
            </div>
          ))}
        </Carousel>
        <button className="exhibition-btn">See All Exhibitions</button>
      </section>
      <section className="upcoming__events">
        <span className="upcoming__events-title">Upcoming Events</span>
        <div className="upcoming__events-images">
          <div className="upcoming__events-item">
            {" "}
            <img src={ev1} alt="1" />
            <a className="upcoming__events-links">
              {" "}
              The Roxbury International Film Festival
            </a>
          </div>
          <div className="upcoming__events-item">
            {" "}
            <img src={ev2} alt="" />
            <a className="upcoming__events-links">
              The Boston French Film Festival
            </a>
          </div>
          <div className="upcoming__events-item">
            <img src={ev3} alt="" />
            <a className="upcoming__events-links">Concerts in the Courtyard</a>
          </div>
        </div>
        <div className="upcoming__events-btn">
          {" "}
          <button className="exhibition-btn">See All Events</button>
        </div>
      </section>
      <section className="event__pride">
        <span className="event__pride-title">The MFA Celebrates Pride</span>
        <div className="event__pride-info">
          <img src={mfa} alt="" className="event__pride-picture" />
          <span className="event__pride-description">
            In addition to participating in Boston’s annual Pride Parade, the
            MFA is celebrating Pride Month with a variety of programs and
            activities. Visitors can also find work by queer artists throughout
            the galleries, including in the exhibition “Tender Loving Care:
            Contemporary Art from the Collection,” which includes works by Kurt
            Reynolds, Diedrick Brackens, Charles LeDray, Nick Cave, Jennie
            Alexander, Jimmy DeSana, and more.
          </span>
        </div>
      </section>
      <section>
        <div className="field__pictures">
          <div className="field__pictures-block">
            {" "}
            <img
              src="https://d1nn9x4fgzyvn4.cloudfront.net/styles/560x560/s3/2023-10/SC423873_Homepage_Square.jpg?itok=FnM0F0mk"
              className="field__pictures-artsection"
            />
            <h3 className="field__pictures-header">Learning and Community</h3>
            <p className="field__pictures-para">
              Bringing people and art together
            </p>
          </div>
          <div className="field__pictures-block">
            <img
              src="https://d1nn9x4fgzyvn4.cloudfront.net/styles/560x560/s3/2023-10/CCunningham_062018CC144_Homepage_Square.jpg?itok=ojcHigGG"
              className="field__pictures-artsection"
            />
            <h3 className="field__pictures-header">Give</h3>
            <p className="field__pictures-para">
              Help us make art and culture accessible to all
            </p>
          </div>
          <div className="field__pictures-block">
            {" "}
            <img
              src="https://d1nn9x4fgzyvn4.cloudfront.net/styles/560x560/s3/2024-04/Hanbok_still0_HomepageSquare.jpg?itok=2fcUZmjd"
              className="field__pictures-artsection s3"
            />
            <h3 className="field__pictures-header">Art for this moment</h3>
            <p className="field__pictures-para">
              Personal responses to the collection
            </p>
          </div>
          <div className="field__pictures-block">
            {" "}
            <img
              src="https://d1nn9x4fgzyvn4.cloudfront.net/styles/560x560/s3/2022-08/220819_MFA_BrandFilm_Stills_1480x1480.jpg?itok=ht74Tsky"
              className="field__pictures-artsection"
            />
            <h3 className="field__pictures-header"> Our MFA promise</h3>
            <p className="field__pictures-para">
              Creating a community where all belong
            </p>
          </div>
        </div>
        <button className="exhibition-btn">Search the Collection</button>
      </section>
    </main>
  );
}

export default Main;
