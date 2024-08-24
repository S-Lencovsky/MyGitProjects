document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('movie-search').value;
    fetchMovies(query);
    fetchSuggestions(query);
});

function fetchSuggestions(genre) {
    fetch('http://127.0.0.1:5000/suggest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ genre: genre })
    })
    .then(response => response.json())
    .then(data => {
        displaySuggestions(data);
    })
    .catch(error => console.error('Error fetching suggestions:', error));
}

function displaySuggestions(suggestions) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '<h2>Suggestions based on your choice:</h2>';
    
    if (suggestions.length > 0) {
        suggestions.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `<h3>${movie}</h3>`;
            movieContainer.appendChild(movieElement);
        });
    } else {
        movieContainer.innerHTML += '<p>No suggestions available</p>';
    }
}
