import { useContext } from "react";
import ResultsContext from "../context/ResultsContext";

export default function Results() {
  const { results } = useContext(ResultsContext);

  if (!results) {
    return (
      <div className="pt-40 text-center text-white">
        <h1 className="text-3xl font-bold">No results yet.</h1>
        <p className="text-gray-400 mt-2">Upload a resume to get analysis.</p>
      </div>
    );
  }

  const keywords = results.keywords || [];

  return (
    <div className="relative pt-32 px-8 pb-24 text-white min-h-screen">

      {/* ------------------------- PAGE TITLE ------------------------- */}
      <h1 className="text-center text-5xl font-extrabold text-blue-400 mb-16 drop-shadow-xl tracking-wide animate-fadeIn">
        Resume Analysis Dashboard
      </h1>

      {/* ------------------------- GRID ------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10">

        {/* ------------------------- LEFT CARD (Keywords) ------------------------- */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-7 shadow-2xl border border-white/10 max-h-[760px] overflow-y-auto animate-fadeIn">
          
          <h2 className="text-2xl font-bold text-blue-300 mb-6 border-b border-white/20 pb-3 tracking-wide">
            Top Extracted Keywords
          </h2>

          {keywords.map(([word, score], idx) => (
            <div
              key={idx}
              className="mb-5 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-all shadow-sm"
            >
              <p className="text-xl font-semibold capitalize">{word}</p>
              <p className="text-gray-300 text-sm mt-1">
                TF-IDF Score:{" "}
                <span className="text-blue-300">{Number(score).toFixed(4)}</span>
              </p>
            </div>
          ))}
        </div>

        {/* ------------------------- RIGHT VISUALS ------------------------- */}
        <div className="animate-fadeInSlow">

          <h2 className="text-3xl font-semibold text-blue-300 mb-10 tracking-wide">
            Visual Breakdown
          </h2>

          <div className="flex flex-col gap-10 items-center">

            {/* -------- WORD CLOUD -------- */}
            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 w-full max-w-[750px]">
              <h3 className="text-xl font-semibold mb-3 text-blue-200">Word Cloud</h3>

              <img
                src={results.wordcloud_url}
                alt="Word Cloud"
                className="w-full rounded-2xl shadow-xl border border-white/10"
              />
            </div>

            {/* -------- BAR CHART -------- */}
            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 w-full max-w-[750px]">
              <h3 className="text-xl font-semibold mb-3 text-blue-200">
                Keyword Frequency Chart
              </h3>

              <img
                src={results.bar_chart_url}
                alt="Keyword Chart"
                className="w-full rounded-2xl shadow-xl border border-white/10"
              />
            </div>

            {/* -------- NEW RADAR CHART -------- */}
            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 w-full max-w-[750px]">
              <h3 className="text-xl font-semibold mb-3 text-blue-200">
                Keyword Strength (Radar Visualization)
              </h3>

              <img
                src={results.radar_chart_url}
                alt="Radar Chart"
                className="w-full rounded-2xl shadow-xl border border-white/10"
              />
            </div>

          </div>
        </div>
      </div>

      {/* BLUE BACKGROUND GLOW */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-700/20 blur-[180px] rounded-full pointer-events-none"></div>
    </div>
  );
}
