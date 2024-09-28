import React from "react";
import { Link } from "react-router-dom";

const ExperienceCard = ({
  companyName,
  address,
  role,
  period,
  description,
  cardIcon,
  link,
}) => {
  return (
    <div className="w-full flex flex-col gap-4 shadow-xl p-4 hover:scale-105 duration-500">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-center items-center gap-2">
          <Link to={link} target="_blank">
            <img
              className={`w-14 aspect-square mx-auto p-[2px] rounded-full border-[2px] border-primary`}
              src={cardIcon}
              alt="/"
            />
          </Link>
          <div className="flex flex-col gap-1">
            <Link to={link} target="_blank">
              <h2 className="text-lg font-semibold hover:underline">
                {companyName}
              </h2>
            </Link>
            <p>{role}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="text-md font-semibold text-right">{address}</h5>
          <p className="text-right">{period}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <ul style={{ listStyleType: "disc" }} className="pl-6">
          {description.map((item) => {
            return (
              <li key={item.slice(0, 15)} className="py-2">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    // </Link>
  );
};

export default ExperienceCard;
