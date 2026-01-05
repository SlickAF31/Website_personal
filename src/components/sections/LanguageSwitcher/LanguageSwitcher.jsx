import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "EN", flag: "🇬🇧" },
  { code: "de", name: "DE", flag: "🇩🇪" },
  { code: "fr", name: "FR", flag: "🇫🇷" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 rounded text-sm font-medium transition ${
            i18n.language === lang.code
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
