import { Link, useLocation } from "react-router-dom";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/results", name: "Results" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b1120]/60 backdrop-blur-xl border-b border-white/10 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <SparklesIcon className="h-7 w-7 text-blue-400 drop-shadow-md" />
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            <span className="text-blue-400">Resume</span>AI
          </h1>
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-8 text-gray-300 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                relative transition duration-300 
                hover:text-blue-400 
                text-lg
                ${location.pathname === item.path ? "text-blue-400" : ""}
              `}
            >
              {item.name}

              {/* Animated underline */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] bg-blue-400 rounded-full transition-all duration-300
                  ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </Link>
          ))}
        </div>

        {/* BADGE */}
        <div className="hidden md:block bg-blue-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-lg text-sm">
          v1.0
        </div>

      </div>
    </nav>
  );
}
