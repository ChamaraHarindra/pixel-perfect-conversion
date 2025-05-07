import React from "react";

interface SectionHeadingProps {
  heading: string;
  subHeading?: string;
  stickyLabel?: string;
  textColor?: "white" | "black";
}

export default function SectionHeading({
  heading,
  subHeading,
  stickyLabel,
  textColor = "black",
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-2 items-center leading-snug">
      <h2
        className={`text-center relative ${
          textColor === "white" ? "text-white" : "text-black"
        }`}
      >
        {heading}
        {stickyLabel && (
          <div className="absolute -top-8 right-0 lg:-right-24 inline-flex font-body font-bold text-base justify-center bg-secondary-700 text-white px-3 py-1 rounded-full rotate-4 text-center text-shadow-2xs">
            {stickyLabel}
            <div className="absolute -bottom-[10px] right-2/6">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6217 0.900391H0.121704C4.1217 5.70039 1.78837 12.9004 0.121704 15.9004C8.02506 11.4368 11.552 8.26054 15.6217 0.900391Z"
                  fill="#FF5656"
                />
              </svg>
            </div>
          </div>
        )}
      </h2>
      {subHeading && (
        <p
          className={`text-center text-lg leading-snug ${
            textColor === "white" ? "text-white" : "text-black"
          }`}
        >
          {subHeading}
        </p>
      )}
    </div>
  );
}
