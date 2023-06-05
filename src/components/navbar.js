import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import Posts from "../components/Posts";

const Nav = () => {
    const { theme } = useContext(ThemeContext);
  return (
    
    <nav class={`navbar ${theme === "dark" ? "navbar-light bg-light" : "navbar-dark bg-dark"} `}>
      <div class="container">
        <a class="navbar-brand" href="#">
          <h1>Theam changer</h1>
        </a>
        <div>
        <Posts />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
