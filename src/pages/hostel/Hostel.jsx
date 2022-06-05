import React, { useContext } from 'react'
import "./hostel.scss"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import Reserve from '../../components/reserve/Reserve';

function Hostel() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data, loading, error, reFetch } = useFetch(`/hostels/find/${id}`);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleClick = () => {
    // if (user) {
    //   setOpenModal(true);
    // } else {
    //   navigate("/login");
    // }
    setOpenModal(true);
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading"
      ) : (
        <div className="hostel-container">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="slider-wrapper">
                <img src={data.photos[slideNumber]} alt="" className="slider-img" />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hostel-wrapper">
            <button onClick={handleClick} className="book-now">Reserve or Book Now!</button>
            <h1 className="hostel-title">{data.name}</h1>
            <div className="hostel-address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hostel-distance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hostel-price-highlight">
              Book a stay of kshs.{data.cheapestPrice} per month at this property and get a free wifi
            </span>
            <div className="hostel-images">
              {data.photos?.map((photo, i) => (
                <div className="hostel-img-wrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hostel-img"
                  />
                </div>
              ))}
            </div>
            <div className="hostel-details">
              <div className="hostel-details-texts">
                <h1 className="hostel-title">{data.title}</h1>
                <p className="hostel-desc">
                  {data.desc}
                </p>
              </div>
              <div className="hostel-details-price">
                <h1>Best price you can get!</h1>
                <span>
                  Located in the real heart of Nyeriexcellent location score of 9.8!
                </span>
                <h2>
                  <b>kshs.{data.cheapestPrice} </b> / month
                </h2>
                <button onClick={handleClick}>Reserve and Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>)}

      {openModal && <Reserve setOpen={setOpenModal} hostelId={id} />}
    </div>
  )
}

export default Hostel