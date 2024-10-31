import React from "react";
import Navbar from "../components/Navbar";
import homeBg from "../images/home_bg.jpg";

import LoginBar from "../components/LoginBar";

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
          background: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <Navbar />

        <div className="text-center text-white flex justify-center w-[37.75rem] p-2 m-auto mt-[150px] leading-[2.5rem]">
          <div>
            <div>
              <div className="text-6xl font-bold">
                Unlimited movies, TV shows and more
              </div>
              <div className="font-bold text-xl m-4">
                Starts at ₹149. Cancel at any time.
              </div>
            </div>
            <div>
              <div className="m-3">
                Ready to watch? Enter your email to create or restart your
                membership.
              </div>
              <div>
                <LoginBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
