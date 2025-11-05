from sklearn.feature_extraction.text import TfidfVectorizer

def extract_tfidf_keywords(text, top_n=10):
    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = vectorizer.fit_transform([text])
    feature_names = vectorizer.get_feature_names_out()
    scores = tfidf_matrix.toarray()[0]
    keyword_scores = sorted(zip(feature_names, scores), key=lambda x: x[1], reverse=True)
    return keyword_scores[:top_n]
