import FileUpload from "../components/FileUpload";

export default function Home() {
  return (
    <div className="pt-32 px-6 fade-in">
      
      {/* HERO SECTION */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          AI Resume Keyword Extractor
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          Get instant insights from your resume using AI-powered keyword extraction.
        </p>

        <p className="text-gray-400 mt-1">
          Upload your PDF and receive keyword scores, word clouds & analysis.
        </p>
      </div>

      {/* CARD */}
      <div className="max-w-2xl mx-auto mt-14">
        <div className="bg-[#0f172a]/90 backdrop-blur-xl p-12 rounded-2xl shadow-2xl border border-white/10 
                        hover:border-blue-400/30 transition-all duration-300">

          <h2 className="text-center text-xl font-semibold text-blue-300 mb-6">
            Upload Your Resume
          </h2>

          <FileUpload />

        </div>
      </div>

      {/* DECORATIVE GLOW */}
      <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[500px] h-[500px] 
                      bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
}
