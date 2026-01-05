import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import image0 from "../../../images/portfolio/projectBachelor/Capture1.PNG";
import image0Fig1 from "../../../images/portfolio/projectBachelor/Capture2.PNG";
import image1 from "../../../images/portfolio/projectPCBBuck/img1.png";
import image2 from "../../../images/portfolio/projectMeteoStation/ESP32-with-DHT11DHT22-Temperature-and-Humidity-Sensor-using-Arduino-IDE.jpg";
import image3 from "../../../images/portfolio/project-03.jpg";
import image3Fig1 from "../../../images/portfolio/cukProjectFiles/Poza_Simulare_Cuk_Simulink.PNG";
import image3Gallery1 from "../../../images/portfolio/cukProjectFiles/Curentii_Primari_Si_Secundari_Transformator.PNG";
import image3Gallery2 from "../../../images/portfolio/cukProjectFiles/Forme_Unda_Curent_si_Tensiune_Iesire.PNG";
import image3Gallery3 from "../../../images/portfolio/cukProjectFiles/Forme_Unda_Curenti_Inductivi_Tensiuni_Capacitive.PNG";
import image3Gallery4 from "../../../images/portfolio/cukProjectFiles/Grafic_Raport_Static_de_Conversie.PNG";
import image3Gallery5 from "../../../images/portfolio/cukProjectFiles/Poza_forma_unda_Curent_Iesire.PNG";
import image3Gallery6 from "../../../images/portfolio/cukProjectFiles/Sarcina_Tensiune_Tranzistor.PNG";
import image3Gallery7 from "../../../images/portfolio/cukProjectFiles/Tensiuni_Transformator_Primar_Secundar.PNG";
import cukPDF from "../../../images/portfolio/cukProjectFiles/Calcule_pe_foaie_Convertor_Cuk.pdf";
import image4 from "../../../images/portfolio/project-04.jpg";
import image4Fig1 from "../../../images/portfolio/project-04-fig1.jpg";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const portfolioData = [
    {
      id: 0,
      image: image0,
      title: t("portfolio.project0.title"),
      shortDescription: t("portfolio.project0.shortDescription"),
      fullDescription: t("portfolio.project0.fullDescription"),
      figureImage: image0Fig1,
      figureCaption: t("portfolio.project0.figureCaption"),
      roleResponsibilities: t("portfolio.project0.roleResponsibilities"),
      technologies: t("portfolio.project0.technologies", { returnObjects: true }),
      challenges: t("portfolio.project0.challenges"),
      codeSection: null,
      challengeDetail: t("portfolio.project0.challengeDetail", { returnObjects: true }),
      outcome: t("portfolio.project0.outcome"),
      galleryImages: null,
      pdfLink: null,
      githubLink: null,
      externalLink: null,
    },
    {
      id: 1,
      image: image1,
      title: t("portfolio.project1.title"),
      shortDescription: t("portfolio.project1.shortDescription"),
      fullDescription: t("portfolio.project1.fullDescription"),
      figureImage: null,
      figureCaption: null,
      roleResponsibilities: t("portfolio.project1.roleResponsibilities"),
      technologies: t("portfolio.project1.technologies", { returnObjects: true }),
      challenges: t("portfolio.project1.challenges"),
      codeSection: null,
      challengeDetail: t("portfolio.project1.challengeDetail", { returnObjects: true }),
      outcome: t("portfolio.project1.outcome"),
      galleryImages: null,
      pdfLink: null,
      githubLink: null,
      externalLink: "https://student108403.autodesk360.com/g/shares/SH512d4QTec90decfa6e01b5a3ebc8253ece",
    },
    {
      id: 2,
      image: image2,
      title: t("portfolio.project2.title"),
      shortDescription: t("portfolio.project2.shortDescription"),
      fullDescription: t("portfolio.project2.fullDescription"),
      figureImage: null,
      figureCaption: null,
      roleResponsibilities: t("portfolio.project2.roleResponsibilities"),
      technologies: t("portfolio.project2.technologies", { returnObjects: true }),
      challenges: t("portfolio.project2.challenges"),
      codeSection: null,
      challengeDetail: t("portfolio.project2.challengeDetail", { returnObjects: true }),
      outcome: t("portfolio.project2.outcome"),
      galleryImages: null,
      pdfLink: null,
      githubLink: t("portfolio.project2.githubLink"),
      externalLink: null,
    },
    {
      id: 3,
      image: image3,
      title: t("portfolio.project3.title"),
      shortDescription: t("portfolio.project3.shortDescription"),
      fullDescription: t("portfolio.project3.fullDescription"),
      figureImage: image3Fig1,
      figureCaption: t("portfolio.project3.figureCaption"),
      roleResponsibilities: t("portfolio.project3.roleResponsibilities"),
      technologies: t("portfolio.project3.technologies", { returnObjects: true }),
      challenges: t("portfolio.project3.challenges"),
      codeSection: t("portfolio.project3.codeSection"),
      challengeDetail: t("portfolio.project3.challengeDetail", { returnObjects: true }),
      outcome: t("portfolio.project3.outcome"),
      galleryImages: [
        { src: image3Gallery1, caption: "Transformer primary and secondary currents" },
        { src: image3Gallery2, caption: "Output current and voltage waveforms" },
        { src: image3Gallery3, caption: "Inductive currents and capacitive voltages" },
        { src: image3Gallery4, caption: "Static conversion ratio graph" },
        { src: image3Gallery5, caption: "Output current waveform detail" },
        { src: image3Gallery6, caption: "Transistor voltage under load" },
        { src: image3Gallery7, caption: "Transformer primary and secondary voltages" },
      ],
      pdfLink: cukPDF,
      githubLink: null,
      externalLink: null,
    },
    {
      id: 4,
      image: image4,
      title: t("portfolio.project4.title"),
      shortDescription: t("portfolio.project4.shortDescription"),
      fullDescription: t("portfolio.project4.fullDescription"),
      roleResponsibilities: t("portfolio.project4.roleResponsibilities"),
      figureImage: image4Fig1,
      figureCaption: t("portfolio.project4.figureCaption"),
      technologies: t("portfolio.project4.technologies", { returnObjects: true }),
      challenges: t("portfolio.project4.challenges"),
      codeSection: t("portfolio.project4.codeSection"),
      challengeDetail: t("portfolio.project4.challengeDetail", { returnObjects: true }),
      outcome: t("portfolio.project4.outcome"),
      githubLink: t("portfolio.project4.githubLink"),
      externalLink: null,
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return (
      <section className="pb-10">
        <div className="md:px-4">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 mb-6 font-medium transition"
          >
            <FaArrowLeft />
            <span>{t("portfolio.backToProjects")}</span>
          </button>

          <div className="bg-white rounded-md shadow-md overflow-hidden">
            <div className="w-full h-64 md:h-96 bg-purple-200 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-8">
              <h2 className="text-3xl text-gray-800 font-bold mb-4">
                {selectedProject.title}
              </h2>

              <div className="mb-6">
                <h3 className="text-xl text-gray-800 font-semibold mb-3">
                  {t("portfolio.overview")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {selectedProject.figureImage && (
                <div className="mb-6 flex flex-col items-center">
                  <img 
                    src={selectedProject.figureImage} 
                    alt={selectedProject.figureCaption}
                    className="w-1/2 rounded-lg shadow-md mb-2 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Image clicked, opening modal');
                      setModalImage(selectedProject.figureImage);
                    }}
                  />
                  <p className="text-sm text-gray-500 italic text-center">
                    {selectedProject.figureCaption}
                  </p>
                </div>
              )}

              {selectedProject.roleResponsibilities && (
                <div className="mb-6">
                  <h3 className="text-xl text-gray-800 font-semibold mb-3">
                    {t("portfolio.roleResponsibilities")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.roleResponsibilities}
                  </p>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl text-gray-800 font-semibold mb-3">
                  {t("portfolio.technologiesUsed")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl text-gray-800 font-semibold mb-3">
                  {t("portfolio.challenges")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.challenges}
                </p>
              </div>

              {selectedProject.codeSection && (
                <div className="mb-6">
                  <h3 className="text-xl text-gray-800 font-semibold mb-3">
                    {t("portfolio.codeImplementation")}
                  </h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
                    {selectedProject.codeSection}
                  </pre>
                </div>
              )}

              {selectedProject.challengeDetail && (
                <div className="mb-6 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <h3 className="text-xl text-gray-800 font-semibold mb-4">
                    {selectedProject.challengeDetail.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-md font-semibold text-purple-700 mb-2">
                        {t("portfolio.situation")}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedProject.challengeDetail.situation}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-purple-700 mb-2">
                        {t("portfolio.action")}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedProject.challengeDetail.action}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-purple-700 mb-2">
                        {t("portfolio.result")}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedProject.challengeDetail.result}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl text-gray-800 font-semibold mb-3">
                  {t("portfolio.outcome")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.outcome}
                </p>
              </div>

              {/* Gallery Section */}
              {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl text-gray-800 font-semibold mb-4">
                    Simulation Results & Waveforms
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProject.galleryImages.map((img, idx) => (
                      <div key={idx} className="relative group">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={(e) => {
                            e.preventDefault();
                            console.log('Gallery image clicked');
                            setModalImage(img.src);
                          }}
                        />
                        <p className="text-xs text-gray-500 mt-2 text-center">
                          {img.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PDF Documentation Link */}
              {selectedProject.pdfLink && (
                <div className="mb-6 flex justify-center">
                  <a
                    href={selectedProject.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>View Calculation Sheet (PDF)</span>
                  </a>
                </div>
              )}

              {(selectedProject.githubLink || selectedProject.externalLink) && (
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                    >
                      <FaGithub />
                      <span>{t("portfolio.viewOnGithub")}</span>
                    </a>
                  )}
                  {selectedProject.externalLink && (
                    <a
                      href={selectedProject.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition shadow-md"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v8.72c0 4.7-3.11 9.06-7.5 10.38-4.39-1.32-7.5-5.68-7.5-10.38V7.78l7-3.6zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                      </svg>
                      <span>View in Fusion 360</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {modalImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setModalImage(null)}
          >
            <div className="relative max-w-7xl max-h-full">
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
                aria-label="Close"
              >
                ×
              </button>
              <img 
                src={modalImage} 
                alt="Full size view"
                className="max-w-full max-h-screen object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </section>
    );
  }

  return (
    <>
      <section className="pb-10">
        <div className="flex flex-wrap md:px-4">
          {portfolioData.map((portfolio) => (
            <PortfolioItem
              portfolio={portfolio}
              key={portfolio.id}
              onClick={() => handleProjectClick(portfolio)}
            />
          ))}
        </div>
      </section>

      {/* Image Modal for main view */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
              aria-label="Close"
            >
              ×
            </button>
            <img 
              src={modalImage} 
              alt="Full size view"
              className="max-w-full max-h-screen object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
