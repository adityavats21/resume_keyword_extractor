import matplotlib
matplotlib.use("Agg")  

import matplotlib.pyplot as plt
from wordcloud import WordCloud
import numpy as np

plt.rcParams["font.family"] = "Inter"
plt.rcParams["axes.facecolor"] = "white"
plt.rcParams["figure.facecolor"] = "white"



def generate_wordcloud(text, output_path="wordcloud.png"):
    if not text or len(text.strip()) == 0:
        text = "resume skills AI python developer"

    wc = WordCloud(
        width=1200,
        height=600,
        background_color="white",
        colormap="viridis",     # Modern gradient colors
        prefer_horizontal=0.9,
        contour_width=1.5,
        contour_color="#4da8ff",
        collocations=False
    ).generate(text)

    wc.to_file(output_path)




def visualize_keywords_bar(keywords, output_file="bar_chart.png"):
    words = [k[0] for k in keywords][::-1]    # Reverse for better visual ordering
    scores = [k[1] for k in keywords][::-1]

    plt.figure(figsize=(10, 6))

    # --- Modern Gradient Bars ---
    bars = plt.barh(
        words,
        scores,
        color="#4da8ff",           # Main color
        edgecolor="none",
        alpha=0.9
    )

    # Add score labels at end of bar
    for bar, score in zip(bars, scores):
        plt.text(
            bar.get_width() + 0.005,
            bar.get_y() + bar.get_height() / 2,
            f"{score:.3f}",
            va="center",
            fontsize=10,
            color="#333"
        )

    # Title
    plt.title(
        "Top Resume Keywords",
        fontsize=18,
        fontweight="bold",
        color="#1e3a8a",
        pad=15
    )

    # Axes styling
    plt.xlabel("TF-IDF Score", fontsize=12, color="#1e293b")
    plt.xticks(color="#475569")
    plt.yticks(color="#1e293b")
    plt.grid(axis="x", linestyle="--", alpha=0.2)

    plt.tight_layout()
    plt.savefig(output_file, dpi=200)
    plt.close()

def visualize_radar_chart(keywords, output_file="radar_chart.png"):
    import numpy as np
    import matplotlib.pyplot as plt

    words = [k[0] for k in keywords]
    scores = [k[1] for k in keywords]

    angles = np.linspace(0, 2 * np.pi, len(words), endpoint=False).tolist()
    scores += scores[:1]  
    angles += angles[:1]

    fig, ax = plt.subplots(figsize=(5, 5), subplot_kw=dict(polar=True))

    ax.plot(angles, scores, color="#4da8ff", linewidth=2)
    ax.fill(angles, scores, color="#4da8ff", alpha=0.25)

    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(words, fontsize=10, color="white")

    ax.set_yticklabels([])

    ax.set_facecolor("#0f172a")
    fig.patch.set_facecolor("#0f172a")

    plt.tight_layout()
    plt.savefig(output_file, dpi=300, transparent=True)
    plt.close()

