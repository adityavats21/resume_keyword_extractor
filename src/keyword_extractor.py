import nltk

def extract_keywords(tokens, top_n=10):
    freq_dist = nltk.FreqDist(tokens)

    top_keywords = dict(freq_dist.most_common(top_n))

    return top_keywords