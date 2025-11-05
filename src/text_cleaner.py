import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

nltk.download('punkt_tab')
nltk.download('punkt')
nltk.download('stopwords')

def clean_text(text):
    tokens = word_tokenize(text.lower())

    stop_words = set(stopwords.words('english'))
    cleaned_tokens = [
        t for t in tokens if t.isalpha() and t not in stop_words and len(t) > 2
    ]

    return cleaned_tokens
