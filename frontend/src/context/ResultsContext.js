import React, { createContext, useState } from "react";

// create context
export const ResultsContext = createContext(null);

// provider component (named export)
export function ResultsProvider({ children }) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <ResultsContext.Provider
      value={{ results, setResults, loading, setLoading, error, setError }}
    >
      {children}
    </ResultsContext.Provider>
  );
}

// default export for compatibility with various import styles
export default ResultsContext;
