const jokeText = document.querySelector('.joke-text');

function getJokes() {
	// console.log("halo nopal");
	fetch('https://icanhazdadjoke.com/', {
		headers: {
			Accept: 'application/json',
		},
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
      const joke = data.joke;
			jokeText.innerHTML = joke;
		});
}
