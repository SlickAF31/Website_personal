import React from "react";
import { useTranslation } from "react-i18next";
import { FaPenNib } from "react-icons/fa";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4 justify-center">
        <div className="w-full max-w-2xl">
          <div className="p-12 md:mx-4 bg-white rounded-md shadow-md text-center">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <FaPenNib className="text-4xl" />
            </div>
            <h2 className="text-3xl text-gray-800 font-bold mb-4">
              {t("blog.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t("blog.description")}
            </p>
            <p className="text-sm text-gray-500 italic">
              {t("blog.stayTuned")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
