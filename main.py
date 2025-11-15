from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

# IMPORT ALL FUNCTIONS (Radar chart was missing earlier!)
from src.pdf_reader import extract_text_from_pdf
from src.text_cleaner import clean_text
from src.tfidf_extractor import extract_tfidf_keywords
from src.visualizer import (
    generate_wordcloud,
    visualize_keywords_bar,
    visualize_radar_chart
)

import os

app = Flask(__name__, static_folder=".")
CORS(app)


@app.route("/extract", methods=["POST"])
def extract_keywords():
    try:
        # ---------- CHECK FILE ----------
        if "resume" not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files["resume"]
        if file.filename == "":
            return jsonify({"error": "Empty file"}), 400

        save_path = "uploaded.pdf"
        file.save(save_path)

        # ---------- EXTRACT TEXT ----------
        raw_text = extract_text_from_pdf(save_path)
        cleaned = clean_text(raw_text)

        # ---------- TF-IDF KEYWORDS ----------
        keywords = extract_tfidf_keywords(cleaned, top_n=10)
        keywords = [[k, float(v)] for k, v in keywords]  # convert tuple → list

        # ---------- GENERATE VISUALS ----------
        generate_wordcloud(cleaned, "wordcloud.png")
        visualize_keywords_bar(keywords, "bar_chart.png")
        visualize_radar_chart(keywords, "radar_chart.png")

        # ---------- RETURN ----------
        return jsonify({
            "keywords": keywords,
            "wordcloud_url": "http://127.0.0.1:5000/wordcloud.png",
            "bar_chart_url": "http://127.0.0.1:5000/bar_chart.png",
            "radar_chart_url": "http://127.0.0.1:5000/radar_chart.png"
        }), 200

    except Exception as e:
        print("ERROR:", e)
        return jsonify({"error": str(e)}), 500


# ---------- SERVE IMAGES ----------
@app.route("/wordcloud.png")
def wc():
    return send_file("wordcloud.png", mimetype="image/png")


@app.route("/bar_chart.png")
def bar():
    return send_file("bar_chart.png", mimetype="image/png")


@app.route("/radar_chart.png")
def radar():
    return send_file("radar_chart.png", mimetype="image/png")


if __name__ == "__main__":
    app.run(debug=True)
