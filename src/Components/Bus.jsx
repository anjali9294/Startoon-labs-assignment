import React, { useState } from "react";
import Seat from "./Seat";
import seats from "./seats";
import seatUpper from "./seatUpper";
import "./Style.css";

const Bus = () => {
  const [seat, setSeat] = useState(seats);
  const [seatUpperr, setUpperr] = useState(seatUpper);
  const [totalseat, setTotalseat] = useState([...seat, ...seatUpperr]);
  const [reserve, setReserve] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);

  const handleSeats = (id) => {
    const updatedSeats = totalseat.map((seat) =>
      seat.id === id ? { ...seat, selected: !seat.selected } : seat
    );

    setTotalseat(updatedSeats);
    const Price = updatedSeats.filter((seat) => seat.selected);
    const totalPrice1 = Price.reduce((total, seat) => total + seat.price, 0);
    setTotalPrice(totalPrice1);

    const selectedSeat = updatedSeats.find((seat) => seat.id === id);
    console.log(selectedSeat);
    setReserve(selectedSeat ? [selectedSeat] : []);
  };

  return (
    <>
      <div className="container">
        <div className="top-heading d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          <h5>Bus Travels</h5>
        </div>
        <div className=" d-flex outer-most">
          <div>
            <h4>Lower Deck</h4>
            <div className="outer-box">
              {seat.map((seat) => {
                return (
                  <Seat
                    key={seat.id}
                    {...seat}
                    handleSeats={handleSeats}
                    selected={seat.selected}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h4>Upper Deck</h4>
            <div className="outer-box">
              {seatUpper.map((seat) => {
                return (
                  <Seat
                    key={seat.id}
                    {...seat}
                    handleSeats={handleSeats}
                    selected={seat.selected}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="confirmation-box">
          <div className="text-box m-2 ">
            {reserve.map((res) => {
              return (
                <>
                  <div className="">
                    <div className="d-flex">
                      <h6 className="me-2">{res.deck}</h6>|
                      <h6 className="ms-2">{res.type}</h6>
                    </div>
                    <h6>₹ {totalPrice}</h6>
                  </div>
                </>
              );
            })}
          </div>
          <button className="btn btn-primary m-2">Continue</button>
        </div>
      </div>
    </>
  );
};

export default Bus;
