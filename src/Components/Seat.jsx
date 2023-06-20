import React, { useState } from "react";
import "./Style.css";

const seat = ({ id, handleSeats, selected }) => {
  const boxStyle = {
    backgroundColor: selected ? "green" : "gray",
  };
  return (
    <>
      <div>
        <div
          className="box"
          style={boxStyle}
          onClick={() => handleSeats(id)}
        ></div>
      </div>
    </>
  );
};

export default seat;
