import React from "react";
import { useTranslation } from "react-i18next";
import Skills from "./Skills/Skills";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">{t("about.title")}</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              {t("about.description")}
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
