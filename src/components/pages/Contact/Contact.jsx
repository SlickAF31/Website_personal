import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      id: 1,
      icon: <FaPhone />,
      title: t("contact.phone"),
      value: "+41 XX XXX XX XX",
      link: "tel:+41XXXXXXXXX",
      linkText: t("contact.callMe"),
    },
    {
      id: 2,
      icon: <FaWhatsapp />,
      title: t("contact.whatsapp"),
      value: t("contact.whatsappMessage"),
      link: "https://wa.me/message/Q47Q2IDMMA2FM1",
      linkText: t("contact.openWhatsapp"),
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      title: t("contact.email"),
      value: "cheveresan_raul@yahoo.com",
      link: "mailto:cheveresan_raul@yahoo.com",
      linkText: t("contact.sendEmail"),
    },
    {
      id: 4,
      icon: <FaMapMarkerAlt />,
      title: t("contact.location"),
      value: t("contact.locationValue"),
      link: null,
      linkText: null,
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      name: t("contact.github"),
      link: "https://github.com/SlickAF31",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      name: t("contact.linkedin"),
      link: "https://www.linkedin.com/in/raul-cheveresan-9a21bb20b/",
    },
  ];

  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="p-8 md:mx-4 bg-white rounded-md shadow-md">
            <h3 className="text-2xl text-gray-800 font-bold mb-6">
              {t("contact.title")}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{item.value}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        className="inline-block text-purple-600 hover:text-purple-800 font-medium text-sm"
                      >
                        {item.linkText} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {t("contact.connectWithMe")}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
