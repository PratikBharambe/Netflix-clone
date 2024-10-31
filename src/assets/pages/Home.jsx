import React from "react";
import Navbar from "../components/Navbar";
import homeBg from "../images/home_bg.jpg";

function Home() {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-full h-screen"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Navbar />
      </div>
    </div>
  );
}

export default Home;
