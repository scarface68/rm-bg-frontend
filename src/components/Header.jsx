import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        direction: "column",
        alignItems: "center",
        backgroundColor: "#FFFF00",
        color: "#121212",
        width: "100%",
        height: "100px", // Increase the height to 100 pixels
      }}
    >
      <h1>Remove Background tool</h1>
    </header>
  );
};

export default Header;
