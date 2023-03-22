const apiKey = '';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (city) => `https://api.openweathermap.org/data/2.5/wether?q=${city}&appid=${apiKey}`;

async function getWeatherByLocation(city) {
	const res = await fetch(url(city), {
		origin: 'cros',
	});

	const resData = await res.json();

	addWeatherToPage(resData);
}

function addWeatherToPage(data) {
	const temp = Ktoc(data.main.temp);

	const weather = document.createElement('div');
	weather.classList.add('.weather');

	weather.innerHTML = `
    <h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      ${temp}
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    </h2>
    <small>${data.weather[0].main}</small>
  `;

	main.innerHTML = '';
	main.appendChild(weather);
}

function Ktoc(K) {
	return Math.floor(K - 273.15);
}

form.addEventListener('submit', (element) => {
	element.preventDefault();

	const city = search.value;

	if (city) {
		getWeatherByLocation(city);
	}
});
