from src.pdf_reader import extract_text_from_pdf
from src.text_cleaner import clean_text
from src.keyword_extractor import extract_keywords
from src.visualizer import visualize_keywords, visualize_wordcloud
from src.tfidf_extractor import extract_tfidf_keywords
import csv

def save_keywords_to_csv(keywords, filename='output_keywords.csv'):
    with open(filename, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Keyword', 'Frequency'])
        for key, value in keywords.items():
            writer.writerow([key, value])
    print(f"[INFO] Keywords saved to {filename}")

# Function to save report
def save_report(keywords, tfidf_keywords, filename='report.txt'):
    with open(filename, 'w') as f:
        f.write("Top Keywords Found (Frequency-Based):\n\n")
        for k, v in keywords.items():
            f.write(f"{k}: {v}\n")

        f.write("\nTop Keywords by TF-IDF Weight:\n\n")
        for word, score in tfidf_keywords:
            f.write(f"{word}: {round(score, 3)}\n")

    print(f"[INFO] Report saved to {filename}")

if __name__ == "__main__":
    print("[INFO] Processing resume file...")

    pdf_path = "data/resume.pdf" 
    text = extract_text_from_pdf(pdf_path)
    print("[INFO] Text extracted from PDF.")

    tokens = clean_text(text)
    print(f"[INFO] Tokens extracted: {len(tokens)} words.")

    keywords = extract_keywords(tokens, top_n=10)
    print("\nTop Keywords Found:\n")
    for k, v in keywords.items():
        print(f"{k}: {v}")

    visualize_keywords(keywords)
    visualize_wordcloud(keywords)

    print("\nTop Keywords by TF-IDF Weight:")
    tfidf_keywords = extract_tfidf_keywords(text)
    for word, score in tfidf_keywords:
        print(f"{word}: {round(score, 3)}")

    save_keywords_to_csv(keywords)
    save_report(keywords, tfidf_keywords)
