from sklearn.feature_extraction.text import TfidfVectorizer

def extract_tfidf_keywords(text, top_n=10):
    vectorizer = TfidfVectorizer(stop_words="english")
    tfidf_matrix = vectorizer.fit_transform([text])

    feature_names = vectorizer.get_feature_names_out()
    scores = tfidf_matrix.toarray()[0]

    keywords = sorted(
        zip(feature_names, scores),
        key=lambda x: x[1],
        reverse=True
    )

    # ensure EXACTLY 2 values per tuple
    keywords = [(word, float(score)) for word, score in keywords[:top_n]]

    return keywords
