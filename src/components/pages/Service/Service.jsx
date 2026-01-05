import React from "react";
import { FaMicrochip, FaCode, FaCube, FaTools, FaWifi, FaVial } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ServiceItem from "./ServiceItem";

const Service = () => {
  const { t } = useTranslation();

  const serviceData = [
    {
      id: 1,
      icon: <FaMicrochip />,
      title: t("services.pcbDesign.title"),
      description: t("services.pcbDesign.description"),
    },
    {
      id: 2,
      icon: <FaCode />,
      title: t("services.embeddedSoftware.title"),
      description: t("services.embeddedSoftware.description"),
    },
    {
      id: 3,
      icon: <FaVial />,
      title: t("services.circuitTesting.title"),
      description: t("services.circuitTesting.description"),
    },
    {
      id: 4,
      icon: <FaWifi />,
      title: t("services.iotIntegration.title"),
      description: t("services.iotIntegration.description"),
    },
    {
      id: 5,
      icon: <FaCube />,
      title: t("services.modeling3d.title"),
      description: t("services.modeling3d.description"),
    },
    {
      id: 6,
      icon: <FaTools />,
      title: t("services.prototyping.title"),
      description: t("services.prototyping.description"),
    },
  ];

  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
