import React from "react";
import logo from "../assets/imgs/pkemon.png";

const Header = ({ title }) => {
  const defaultTitle = "Consumo de Apis Pokemon";
  const displayedTitle = title || defaultTitle;

  return (
    <div className="header">
      <img src={logo} alt="Logo" style={{ width: "250px", height: "70px" }} />
      <h1>{displayedTitle}</h1>
    </div>
  );
};

export default Header;
