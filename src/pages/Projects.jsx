import React from "react";

const projects = [
  {
    title: "Stroke Risk Prediction",
    description:
      "Built and tuned machine learning models (Logistic Regression, XGBoost) to predict stroke risk from clinical data, achieving 0.92 ROC-AUC.",
    tech: ["Python", "scikit-learn", "XGBoost", "SHAP", "Streamlit"],
    link: "https://github.com/locphan/stroke-risk-prediction", // replace later
    image: "/images/stroke.png", // optional: add in /public/images/
  },
  {
    title: "Customer Churn Dashboard",
    description:
      "Interactive Power BI dashboard analyzing telecom churn patterns using DAX, KPIs, and cohort analysis.",
    tech: ["Power BI", "DAX", "SQL"],
    link: "https://github.com/locphan/churn-analytics", // optional
    image: "/images/churn.png",
  },
  
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6 md:px-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
          >
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {proj.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
