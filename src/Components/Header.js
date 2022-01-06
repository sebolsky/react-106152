import React from "react";

const Header = ({title}) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>
        Aplikacja grupy 6 na kierunku Informatyka w Społecznej Akademii Nauk
      </p>
    </div>
  );
};

export default Header;