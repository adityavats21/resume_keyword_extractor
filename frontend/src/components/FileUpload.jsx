import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResultsContext } from "../context/ResultsContext";

export default function FileUpload() {
  const { setResults, setLoading, setError } = useContext(ResultsContext);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const backendUrl = "http://127.0.0.1:5000/extract";

  const submit = async (e) => {
    e?.preventDefault?.();

    if (!file) {
      setError("Please upload a PDF");
      return;
    }

    setError("");
    setLoading(true);
    setProgress(0);

    const fd = new FormData();
    fd.append("resume", file);

    try {
      console.log("📤 Sending POST to", backendUrl);

      // Use XHR to get upload progress (more responsive UX)
      const data = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", backendUrl);

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              const parsed = JSON.parse(xhr.responseText);
              resolve(parsed);
            } catch (err) {
              reject(new Error("Invalid JSON from backend"));
            }
          } else {
            reject(new Error("Server returned status " + xhr.status));
          }
        };

        xhr.onerror = () => reject(new Error("Network error"));

        xhr.upload.onprogress = (ev) => {
          if (ev.lengthComputable) {
            setProgress(Math.round((ev.loaded * 100) / ev.total));
          }
        };

        xhr.send(fd);
      });

      console.log("📥 Received data:", data);

      // Strong validation
      if (!data || (!data.keywords && !data.wordcloud_url && !data.bar_chart_url)) {
        console.warn("Unexpected backend shape", data);
        setError("Unexpected backend response. Check server logs.");
        setLoading(false);
        return;
      }

      // Save into context for Results page
      setResults(data);

      // navigate after a short delay so UI updates
      navigate("/results");
    } catch (err) {
      console.error("Upload error:", err);
      setError("Backend error: " + (err.message || "unknown"));
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="py-6">
      <div>
        <input
          id="resume-file"
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0] ?? null)}
        />
      </div>

      <div style={{ marginTop: 16 }}>
        <button
          onClick={submit}
          disabled={false}
          style={{
            background: "#2D6CDF",
            color: "white",
            borderRadius: 8,
            padding: "10px 18px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Extract Keywords
        </button>
        <span style={{ marginLeft: 12 }}>
          {file ? file.name : "No file chosen"}
        </span>
      </div>

      {progress > 0 && (
        <div style={{ marginTop: 8 }}>
          Upload: {progress}% <progress value={progress} max="100" />
        </div>
      )}
    </form>
  );
}
