import img from "../assets/Itachi-ANBU-Featured.avif";
import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
const Card = () => {
    const { theme, handleOnClick } = useContext(ThemeContext);
  return (
    
    <div className={`card ${theme === "dark" ? "bg-secondary" : "bg-light"} col-3 mb-3`}>
      <img src={img} class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small>Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
