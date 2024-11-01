import React from "react";
import { IoDesktopOutline } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { GiDramaMasks } from "react-icons/gi";

function MoreReasonToJoin() {
  const moreReasons = [
    {
      head: "Enjoy on your TV",
      desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      logo: <IoDesktopOutline />,
    },
    {
      head: "Download your shows to watch offline",
      desc: "Save your favourites easily and always have something to watch.",
      logo: <FaDownload />,
    },
    {
      head: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      logo: <GiPartyPopper />,
    },
    {
      head: "Create profiles for kids",
      desc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      logo: <GiDramaMasks />,
    },
  ];

  return (
    <>
      <div className="text-3xl font-semibold">More reasons to join</div>
      {moreReasons.map((item) => (
        <div class="inline-block items-center h-80 bg-gradient-to-br from-[#272445] via-[#16142a] to-[#000000] m-3 w-[21rem] rounded-md text-white p-8 relative">
          <h2 class="text-2xl font-bold">{item.head}</h2>
          <p class="mt-4 text-[#cecbcb]">{item.desc}</p>
          <div class="absolute bottom-4 right-4 p-4 pr-8 text-6xl">
            {item.logo}
          </div>
        </div>
      ))}
    </>
  );
}

export default MoreReasonToJoin;
