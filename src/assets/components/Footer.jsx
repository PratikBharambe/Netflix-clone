import React from "react";

import LanguageDropdown from "./LanguageDropdown";

function Footer() {
  const fTable = [
    {
      trdata: [
        { text: "FAQ", link: "#" },
        { text: "Help Centre", link: "#" },
        { text: "Account", link: "#" },
        { text: "Media Centre", link: "#" },
      ],
    },
    {
      trdata: [
        { text: "Investor Reaction", link: "#" },
        { text: "Jobs", link: "#" },
        { text: "Why to watch", link: "#" },
        { text: "Terms to use", link: "#" },
      ],
    },
    {
      trdata: [
        { text: "Privacy", link: "#" },
        { text: "Cookie Preferences", link: "#" },
        { text: "Corporate Information", link: "#" },
        { text: "Contact Us", link: "#" },
      ],
    },
    {
      trdata: [
        { text: "Speed Test", link: "#" },
        { text: "Legal Notices", link: "#" },
        { text: "Only on Netflix", link: "#" },
      ],
    },
  ];

  return (
    <>
      <div>
        <div>
          Questions? Call{" "}
          <a href="tel:+000-800-919-1694" className="underline">
            000-800-919-1694
          </a>
        </div>

        <div className="mt-11">
          <table>
            {fTable.map((item)=>(
                <tr>
                    {item.trdata.map((fdata)=>(
                        <td className="w-[25rem] py-3">
                            <a href={fdata.link} className="underline">{fdata.text}</a>
                        </td>
                    ))}
                </tr>
            ))}
          </table>
        </div>

        <div className="p-2 border-2 border-white rounded-xl w-[150px] flex justify-center mt-11">
            <LanguageDropdown/>
        </div>

        <div className="p-2 mt-11">
            Netflix India
        </div>

      </div>
    </>
  );
}

export default Footer;
