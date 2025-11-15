export default function About() {
  return (
    <div className="pt-32 pb-20 px-8 text-white min-h-screen">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-blue-400 drop-shadow-lg mb-10">
        About ResumeAI
      </h1>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl 
                      rounded-2xl p-10 shadow-2xl border border-white/10">

        <p className="text-lg text-gray-300 leading-7 mb-6">
          <strong className="text-blue-300">ResumeAI</strong> is an intelligent 
          resume analysis tool powered by Natural Language Processing (NLP) and 
          TF-IDF keyword extraction. It helps students and professionals instantly 
          identify important keywords, strengths, and areas of improvement inside 
          their resume.
        </p>

        {/* Features Section */}
        <h2 className="text-2xl font-bold text-blue-300 mt-6 mb-4">
           Key Features
        </h2>

        <ul className="space-y-3 text-gray-200">
          <li className="bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition">
            • Extract top keywords using TF-IDF
          </li>
          <li className="bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition">
            • Auto-generated Word Cloud for visual insights
          </li>
          <li className="bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition">
            • Keyword frequency bar chart for deeper analysis
          </li>
          <li className="bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition">
            • Clean, modern, responsive UI with smooth navigation
          </li>
        </ul>

        {/* Why Useful */}
        <h2 className="text-2xl font-bold text-blue-300 mt-10 mb-4">
           Why ResumeAI?
        </h2>

        <p className="text-lg text-gray-300 leading-7">
          Recruiters use ATS systems to scan resumes automatically. 
          ResumeAI helps you understand what keywords your resume contains and 
          whether it aligns with industry expectations.  
          It’s fast, accurate, and extremely useful for **college students, job seekers, 
          and professionals** aiming to improve their resume impact.
        </p>

        {/* Footer Note */}
        <p className="text-center text-gray-400 mt-10">
          Made by <span className="text-blue-300 font-semibold">Aditya Vats</span>
        </p>
      </div>

      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-700/20 blur-[140px] rounded-full pointer-events-none"></div>

    </div>
  );
}
