import React from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const skillsData = {
    languages: {
      advanced: [t("skills.languages.c"), t("skills.languages.cpp")],
      intermediate: [t("skills.languages.python"), t("skills.languages.matlab")],
      basic: [
        t("skills.languages.java"),
        t("skills.languages.htmlcss"),
        t("skills.languages.sql"),
        t("skills.languages.bash"),
        t("skills.languages.gradle"),
      ],
    },
    tools: [
      t("skills.toolsList.git"),
      t("skills.toolsList.linux"),
      t("skills.toolsList.fusion360"),
      t("skills.toolsList.bambuLab"),
      t("skills.toolsList.ccs"),
    ],
    technical: [
      t("skills.technicalList.embedded"),
      t("skills.technicalList.pcb"),
      t("skills.technicalList.prototyping"),
      t("skills.technicalList.automotive"),
    ],
    softSkills: [
      t("skills.softSkillsList.problemSolving"),
      t("skills.softSkillsList.communication"),
      t("skills.softSkillsList.adaptability"),
      t("skills.softSkillsList.leadership"),
      t("skills.softSkillsList.creativity"),
    ],
  };

  const spokenLanguages = [
    { name: t("skills.spokenLanguagesList.romanian"), level: t("skills.spokenLanguagesList.native") },
    { name: t("skills.spokenLanguagesList.english"), level: t("skills.spokenLanguagesList.advancedLevel") },
    { name: t("skills.spokenLanguagesList.german"), level: t("skills.spokenLanguagesList.elementary") },
  ];

  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-6">{t("skills.title")}</h3>

            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/2">
                <div className="mb-6">
                  <h4 className="text-lg text-gray-800 font-semibold mb-3">{t("skills.programmingLanguages")}</h4>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="italic font-medium">{t("skills.advanced")}</span>
                    </p>
                    <ol className="list-decimal ml-6 mb-3">
                      {skillsData.languages.advanced.map((lang, idx) => (
                        <li key={idx} className="text-sm text-gray-400">{lang}</li>
                      ))}
                    </ol>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="italic font-medium">{t("skills.intermediate")}</span>
                    </p>
                    <ol className="list-decimal ml-6 mb-3">
                      {skillsData.languages.intermediate.map((lang, idx) => (
                        <li key={idx} className="text-sm text-gray-400">{lang}</li>
                      ))}
                    </ol>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="italic font-medium">{t("skills.basic")}</span>
                    </p>
                    <ol className="list-decimal ml-6">
                      {skillsData.languages.basic.map((lang, idx) => (
                        <li key={idx} className="text-sm text-gray-400">{lang}</li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg text-gray-800 font-semibold mb-3">{t("skills.spokenLanguages")}</h4>
                  <ul className="ml-4">
                    {spokenLanguages.map((lang, idx) => (
                      <li key={idx} className="text-sm text-gray-400 mb-2">
                        <span className="font-medium text-gray-600">{lang.name}</span> ({lang.level})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="mb-6">
                  <h4 className="text-lg text-gray-800 font-semibold mb-3">{t("skills.tools")}</h4>
                  <ul className="ml-4">
                    {skillsData.tools.map((tool, idx) => (
                      <li key={idx} className="text-sm text-gray-400 mb-1">- {tool}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg text-gray-800 font-semibold mb-3">{t("skills.technical")}</h4>
                  <ul className="ml-4">
                    {skillsData.technical.map((tech, idx) => (
                      <li key={idx} className="text-sm text-gray-400 mb-1">- {tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg text-gray-800 font-semibold mb-3">{t("skills.softSkills")}</h4>
                  <ul className="ml-4">
                    {skillsData.softSkills.map((skill, idx) => (
                      <li key={idx} className="text-sm text-gray-400 mb-1">- {skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
