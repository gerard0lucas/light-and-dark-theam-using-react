import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
const Posts = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);
  return (
    <div>
      <button
        className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} border`}
        onClick={handleOnClick}
      >
        Make it {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Posts;
