import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

function FrequentlyAskedQuestions() {
  const questionAndAnswer = [
    {
      question: "What is Netflix?",
      answer:
        "<p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p><br><p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "<p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p><br><p>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "<p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p><br><p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>",
    },
  ];

  // Use an array to track open states for each question
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleOpen = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <>
    <div className="text-3xl mx-10 p-4 font-semibold">Frequently Asked Questions</div>
      {questionAndAnswer.map((item, index) => (
        <div className="m-1 p-1 mx-20" key={index}>
          <div
            className="flex items-center p-4 m-1 bg-[#2d2d2d] justify-between text-2xl font-semibold cursor-pointer"
            onClick={() => toggleOpen(index)}
          >
            <div>
              <h2>{item.question}</h2>
            </div>
            <div>{openIndexes.includes(index) ? <RxCross1 /> : <FaPlus />}</div>
          </div>
          {openIndexes.includes(index) && (
            <div className="p-4 m-1 text-xl bg-[#2d2d2d] font-semibold text-justify my-3">
              <div dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default FrequentlyAskedQuestions;
