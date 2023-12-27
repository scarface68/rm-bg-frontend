import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        direction: "column",
        alignItems: "center",
        backgroundColor: "cyan",
        color: "white",
        width: "100%",
        height: "100px", // Increase the height to 100 pixels
      }}
    >
      <h1>Remove Background tool</h1>
    </header>
  );
};

export default Header;
