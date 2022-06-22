// Kalian bisa menambahkan CSS di src/components/Headers.css
import React from "react";
import "./Headers.css";

const Header = () => {
  return (
    <div>
      <h1>Call a Friend</h1>
      <h2>your friendly contact app</h2>
      <p className="hr1" />
    </div>
  );
};

export default Header;
