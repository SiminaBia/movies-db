const apiURL = 'https://ancient-caverns-16784.herokuapp.com/movies';

const moviesContainer = document.querySelector('.movie-list');

function movieSection(movies) {
	return movies.map((movie) => {
		//check if movie poster has a value
		if (movie.Poster) {
			return `
			<img src=${movie.Poster} movie-id=${movie._id}/>
		 `;
		}
	});
}

function createMovieContainer(movies) {
	const movieElement = document.createElement('div');
	movieElement.setAttribute('class', 'movie');

	const movieTemplate = `
        <section class="movie-items">
            ${movieSection(movies)}
        </section>
    `;

	movieElement.innerHTML = movieTemplate;
	return movieElement;
}

function renderMovies(data) {
	const movies = data.results;
	const movieBlock = createMovieContainer(movies);
	moviesContainer.appendChild(movieBlock);
	console.log(data);
}

document.querySelector('body').addEventListener('mouseover', function(event) {
	if (event.target.tagName.toLowerCase() === 'img') {
		console.log('test');
		// document.querySelector('img').setAttribute('class', 'movie-text');
	}
});

fetch(apiURL)
	.then((response) => response.json())
	.then(renderMovies);

window.onload = movieSection();
