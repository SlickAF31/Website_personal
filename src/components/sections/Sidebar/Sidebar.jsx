import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import profile from "../../../images/profile.jpg";

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/SlickAF31",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/raul-cheveresan-9a21bb20b/",
  },
];

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">{t("sidebar.name")}</h1>
        <p className="text-sm text-gray-400 mb-3">
          {t("sidebar.position")}
          <a href="#0" className="text-purple-600 pl-1">
            {t("sidebar.company")}
          </a>
        </p>
        <a
          href="#0"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume"
        >
          {t("sidebar.downloadResume")}
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          {t("sidebar.aboutMe")}
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          {t("sidebar.description")}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
