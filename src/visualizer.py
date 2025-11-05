import matplotlib.pyplot as plt
from wordcloud import WordCloud
from wordcloud import WordCloud

def visualize_keywords(keywords):
    keywords = dict(sorted(keywords.items(), key=lambda x: x[1], reverse=True))

    plt.figure(figsize=(8, 5))
    plt.barh(list(keywords.keys()), list(keywords.values()), color='skyblue', edgecolor='black')
    plt.xlabel('Frequency', fontsize=12)
    plt.ylabel('Keywords', fontsize=12)
    plt.title('Top Keywords in Resume', fontsize=14, fontweight='bold')
    plt.grid(axis='x', linestyle='--', alpha=0.7)
    plt.tight_layout()
    plt.show()


def visualize_wordcloud(keywords):
    wc = WordCloud(width=800, height=400, background_color='white').generate_from_frequencies(keywords)
    plt.imshow(wc, interpolation='bilinear')
    plt.axis('off')
    plt.title("Keyword Word Cloud", fontsize=14, fontweight='bold')
    plt.show()

def visualize_wordcloud(keywords):
    word_freq = dict(keywords)
    wc = WordCloud(width=800, height=400, background_color='white').generate_from_frequencies(word_freq)
    wc.to_file("wordcloud.png")
    plt.imshow(wc, interpolation='bilinear')
    plt.axis("off")
    plt.title("Word Cloud of Resume Keywords")
    plt.show()    
