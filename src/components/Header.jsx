import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFF00",
        color: "#121212",
        width: "100%",
        height: "100px", // Increase the height to 100 pixels
      }}
    >
      <h1>Remove Background tool</h1>
      <p style={{ fontSize: "12px", opacity: 0.8 }}>If it takes long time refresh page and try again</p>
    </header>
  );
};

export default Header;
