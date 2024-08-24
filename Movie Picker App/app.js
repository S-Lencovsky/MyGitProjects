const apiKey = '131f053f';

document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('movie-search').value;
    fetchMovies(query);
    fetchSuggestions(query);
});

function fetchMovies(query) {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.Search);
        })
        .catch(error => console.error('Error fetching data:', error));
    }

function fetchTrailer(imdbID) {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayTrailer(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function fetchInfo(imdbID) {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayInfo(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function addToMyList(imdbID) {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayMyList(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';

    if (movies) {
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            movieElement.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
                <button id='Trailer' onclick="fetchTrailer('${movie.imdbID}')">Trailer</button>
                <button id='More Info' onclick="fetchInfo('${movie.imdbID}')">More Info</button>
                <button id='Add to My List' onclick="addToMyList('${movie.imdbID}')">Add to My List</button>
                
            `;

            movieContainer.appendChild(movieElement);

        });
    } else {
        movieContainer.innerHTML = '<p>No movies found</p>';
    }
}

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
