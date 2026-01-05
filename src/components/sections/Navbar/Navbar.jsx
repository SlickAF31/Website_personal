import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Service from "../../pages/Service/Service";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  const navbarData = [
    {
      id: 1,
      title: t("nav.about"),
      to: "/about",
    },
    {
      id: 2,
      title: t("nav.services"),
      to: "/services",
    },
    {
      id: 3,
      title: t("nav.works"),
      to: "/works",
    },
    {
      id: 4,
      title: t("nav.blogs"),
      to: "/blogs",
    },
    {
      id: 5,
      title: t("nav.contact"),
      to: "/contact",
    },
  ];

  return (
    <Router>
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
        <div className="flex flex-wrap justify-between items-center">
          <ul className="flex flex-wrap">
            {navbarData.map((el, id) => (
              <LinkItem el={el} key={id} />
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/services">
          <Service />
        </Route>
        <Route path="/works">
          <Portfolio />
        </Route>
        <Route path="/blogs">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="m-3 lg:mx-5">
      <NavLink
        to={to}
        activeClassName="text-purple-600"
        className="text-gray-800 text-medium hover:text-purple-600"
      >
        {title}
      </NavLink>
    </li>
  );
};
