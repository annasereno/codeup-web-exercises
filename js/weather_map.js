var currentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?` +
	`lat=29.426825118534886&lon=-98.48948239256946` +
	`&appid=${OPEN_WEATHER_API_KEY}` +
	`&units=imperial`)
	.then( data => data.json())
	.then( currentWeather => console.log(currentWeather));

const weatherOutput = document.querySelector("#forecast");

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
	`lat=29.426825118534886&lon=-98.48948239256946` +
	`&appid=${OPEN_WEATHER_API_KEY}` +
	`&units=imperial`)
	.then( data => data.json())
	.then( forecast => {
		console.log(forecast);
		forecast.list.forEach(weather => {
			const time = document.createElement("p");
			const temp = document.createElement("p");
			time.innerText = dateFromTimeStamp(weather.dt);
			temp.innerText = weather.main.temp;
			weatherOutput.appendChild(time);
			weatherOutput.appendChild(temp);
		})


//MAPBOX
mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
	container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
	style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
	center: [-98.48, 29.42], // starting position [lng, lat]
	zoom: 9 // starting zoom
});
