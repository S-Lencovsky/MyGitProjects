from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins

# Dummy movie data
movies = pd.DataFrame({
    'title': ['The Matrix', 'Titanic', 'Inception', 'The Godfather', 'The Dark Knight'],
    'genre': ['Action, Sci-Fi', 'Romance, Drama', 'Action, Sci-Fi', 'Crime, Drama', 'Action, Crime, Drama']
})

# Function to suggest movies based on genre similarity
def get_movie_suggestions(user_genre):
    # Vectorize the genres
    count_vectorizer = CountVectorizer(stop_words='english')
    genre_matrix = count_vectorizer.fit_transform(movies['genre'])

    # Calculate cosine similarity
    cosine_sim = cosine_similarity(genre_matrix, genre_matrix)

    # Find the index of the user's genre
    user_index = movies[movies['genre'].str.contains(user_genre, case=False)].index.tolist()

    # Get similar movies
    similar_movies = []
    for idx in user_index:
        sim_scores = list(enumerate(cosine_sim[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = sim_scores[1:6]  # Get top 5 similar movies
        similar_movies.extend([movies['title'][i[0]] for i in sim_scores])

    return list(set(similar_movies))

# API endpoint for movie suggestions
@app.route('/suggest', methods=['POST'])
def suggest():
    try:
        user_data = request.json
        genre = user_data.get('genre')
        suggestions = get_movie_suggestions(genre)
        return jsonify(suggestions)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
