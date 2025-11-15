import nltk
from nltk.corpus import stopwords
import re

nltk.download("punkt")
nltk.download("stopwords")

def clean_text(text):
    text = text.lower()
    text = re.sub(r"[^a-zA-Z0-9\s]", "", text)
    words = text.split()
    stop = set(stopwords.words("english"))
    cleaned = " ".join([w for w in words if w not in stop])
    return cleaned
