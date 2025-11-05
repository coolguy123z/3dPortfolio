import React from "react";

const skills = [
  "Python", "Pandas", "scikit-learn", "XGBoost", "SQL",
  "Power BI / DAX", "Streamlit", "Rasters & GIS", "React", "Three.js"
];

const About = () => {
  return (
    <section className="min-h-screen bg-white">
      {/* Header band */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About Me
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            I’m a data-driven builder who enjoys turning messy datasets into clear stories and interactive visuals.
            Right now I’m focused on ML for classification problems, explainability (SHAP), and clean dashboards.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: intro */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Hello!</h2>
            <p className="mt-2 text-gray-700">
              I’m <span className="font-semibold">Loc Phan</span>, a Computational &amp; Data Science student who
              builds practical ML projects and data apps. My recent work includes a stroke-risk
              predictor (0.92 ROC-AUC), a telecom churn dashboard in Power BI, and more data science experiments coming soon.
            </p>
            <p className="mt-2 text-gray-700">
              I like simple, readable code, fast iteration, and visuals that make results obvious.
              When I’m not shipping projects, I’m learning markets and experimenting with new coding methods and DSA.
            </p>
          </div>

          {/* Skills chips */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Core Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs md:text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline / highlights */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Highlights</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Built ML pipeline for stroke risk with SHAP explainability.</li>
              <li>• Designed a telecom churn KPI dashboard (Power BI + DAX).</li>
              <li>• Analyzed urban vegetation inequities with rasterio &amp; geopandas.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/resume.pdf"  // put your resume in /public as resume.pdf
              className="inline-flex items-center rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800"
            >
              Download Resume
            </a>
            <a
              href="mailto:locp31077@gmail.com"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              Contact Me →
            </a>
          </div>
        </div>

        {/* Right: photo / card */}
        <aside className="md:col-span-1">
          <div className="sticky top-8">
            <div className="bg-gray-50 border rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/images/profile.jpg" // optional: drop an image in /public/images/
                alt="Loc Phan"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <p className="text-gray-700 text-sm">
                  Based in Virginia • Open to internships and entry position &amp; projects in Data Science,
                  Analytics, and ML Engineering.
                </p>
                <div className="mt-4 border-t pt-4 space-y-2 text-sm">
                  <div><span className="font-semibold">Email:</span> locp31077@gmail.com</div>
                  <div><span className="font-semibold">GitHub:</span> https://github.com/coolguy123z</div>
                  <div><span className="font-semibold">LinkedIn:</span> https://www.linkedin.com/in/lp2003/</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
