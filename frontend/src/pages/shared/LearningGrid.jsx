import React from "react";
import HighlightText from "./HighlightText";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Secure Online Classes",
    description:
      "Astranex partners with leading institutions to bring secure, engaging, and efficient online learning to students and educators worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Advanced Face Recognition",
    description:
      "Astranex ensures only authorized individuals access online classes, enhancing security and privacy.",
  },
  {
    order: 2,
    heading: "Real-Time Language Filtering",
    description:
      "Our real-time filtering system automatically detects and removes offensive language, promoting a respectful learning atmosphere.",
  },
  {
    order: 3,
    heading: "Seamless Attendance Management",
    description:
      "Streamline attendance management with WhatsApp and Twilio integration, making it efficient and error-free.",
  },
  {
    order: 4,
    heading: "Gamified Learning Experience",
    description:
      "Astranex introduces gamified homework and real-time participation features, making learning fun, interactive, and engaging.",
  },
  {
    order: 5,
    heading: "Enhanced Student Engagement",
    description:
      "Our platform fosters active class participation and collaboration, enhancing student engagement and learning outcomes.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <button active={true} linkto={card.BtnLink} className="btn">
                    {card.BtnText}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
