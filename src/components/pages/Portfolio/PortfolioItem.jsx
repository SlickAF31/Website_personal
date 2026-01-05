import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";

const PortfolioItem = (props) => {
  const { t } = useTranslation();
  const { image, title, shortDescription } = props.portfolio;
  const { onClick } = props;

  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-lg transition cursor-pointer"
           onClick={onClick}>
        <div className="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
          />
          <div className="absolute opacity-0 transition duration-200 bg-purple-600 bg-opacity-90 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100">
            <div className="text-white text-center">
              <FaArrowRight className="text-3xl mx-auto mb-2" />
              <p className="font-medium">{t("portfolio.viewDetails")}</p>
            </div>
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-purple-600 transition">
          {title}
        </h3>
        <p className="text-gray-400">{shortDescription}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
