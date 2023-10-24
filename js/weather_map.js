/////MAPBOX
mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
	center: [-98.48, 29.42], // starting position [lng, lat]
	zoom: 9 // starting zoom
});

let marker = new mapboxgl.Marker({
	draggable: true
})
	.setLngLat([-98.48, 29.42])
	.addTo(map);


const onDragUpdateWeather = () => {
	const lngLat = marker.getLngLat();
	const lngLatArr = Object.values(lngLat);
	// function get and loops
	// getAndLoop(lngLatArr);
	console.log(lngLatArr)
}// end of function onDragEnd

marker.on('dragend', onDragUpdateWeather);


///WEATHER////
var currentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?` +
	`lat=29.426825118534886&lon=-98.48948239256946` +
	`&appid=${OPEN_WEATHER_API_KEY}` +
	`&units=imperial`)
	.then(data => data.json())
	.then(currentWeather => console.log(currentWeather));


//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const weatherCardsDiv = document.querySelector("#forecastCard");


const getDayNameByDate = (dt) => {
	const newDate = new Date(dt * 1000).toString().substring(4, 15);
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const dayIndex = new Date(newDate).getDay();
	return days[dayIndex];
}

// fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
// 	`lat=29.426825118534886&lon=-98.48948239256946` +
// 	`&appid=${OPEN_WEATHER_API_KEY}` +
// 	`&units=imperial`)
// 	.then(data => data.json())
// 	.then(forecast => {
// 		console.log(forecast);
// 		forecast.list.forEach((weather, index) => {
// 			const date = dateFromTimeStamp(weather.dt);
// 			const day = getDayNameByDate(weather.dt)
// 			const temp = parseInt(weather.main.temp);
// 			// const description = weather.weather[0].description
// 			// console.log(weather.dt);
// 			if (index % 8 === 0) {
// 				const cardDiv = document.createElement("div");
// 				cardDiv.classList.add('card');
// 				cardDiv.innerHTML = `
// 					<div class="card-header">${day}, ${date}</div>
// 					<ul class="list-group list-group-flush">
// 					<img src=" https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" class="card-img-top" alt="...">
// 					<li class="list-group-item">${temp} Degrees.</li>
// 					<li class="list-group-item">Description: ${weather.weather[0].description}</li>
// 					<li class="list-group-item">Humidity: ${weather.main.humidity}</li>
// 					<li class="list-group-item">Wind: ${weather.wind.speed}</li>
// 					<li class="list-group-item">Pressure: ${weather.main.pressure}</li>
// 					</ul>
// 					`;
// 				weatherCardsDiv.appendChild(cardDiv);
// 			}
// 		})
// 	})

function getWeatherAndOutputCards(lat = 29.426825118534886, long = -98.48948239256946){
	fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
		`lat=${lat}&lon=${long}` +
		`&appid=${OPEN_WEATHER_API_KEY}` +
		`&units=imperial`)
		.then(data => data.json())
		.then(forecast => {
			console.log(forecast)
			createCards(forecast)
		});
}

getWeatherAndOutputCards();

function createCards(forecast) {
	const forecastList = forecast.list;
	const weather = forecastList.filter((item, index) => {
		// Filter out all but the first item for each day
		return (
			index === 0 ||
			forecastList[index - 1].dt_txt.split(' ')[0] !==
			item.dt_txt.split(' ')[0]
		);
	});
	weather.forEach(weather => {
		const weatherCard = document.createElement('div');
		weatherCard.classList.add('card');
		weatherCard.innerHTML = `
	<div class="card-header">${weather.dt_txt.split(' ')[0]}</div>
	<ul class="list-group list-group-flush">
	<li class="list-group-item">
	<img src=" https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"alt="...">
	 ${weather.main.temp} Degrees.</li>
	<li class="list-group-item">Description: ${weather.weather[0].description}</li>
	<li class="list-group-item">Humidity: ${weather.main.humidity}</li>
	<li class="list-group-item">Wind: ${weather.wind.speed}</li>
	<li class="list-group-item">Pressure: ${weather.main.pressure}</li>
	</ul>
		`;
		weatherCardsDiv.appendChild(weatherCard);
	});
}

// <h2>${weather.dt_txt.split(' ')[0]}</h2>
// <p>Temperature: ${weather.main.temp}</p>
// <p>Description: ${weather.weather[0].description}</p>


// function createWeatherCard(forecast) {
// 	for (let i = 0; i < forecast.length; i+=8) {
// 		generateWeatherCard(forecast[i])
// 	}
// }


//generateWeatherCard = (forecast)=>{
// 	const cardDiv = document.createElement("div");
// 	cardDiv.classList.add('card');
// 	cardDiv.innerHTML = `
// 	 <img src="..." class="card-img-top" alt="...">
//      <div class="card-body">
//      <h5 class="card-title">${day}, ${date}</h5>
//      <p class="card-text">${temp} Degrees.</p>
//      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
//      </div>
//      `;
// 	weatherCardsDiv.appendChild(cardDiv);
// const cardDiv = document.createElement("div");
// 				cardDiv.classList.add('card');
// 				cardDiv.innerHTML = `
// 					<div class="card-header">${day}, ${date}</div>
// 					<ul class="list-group list-group-flush">
// 					<img src=" https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" class="card-img-top" alt="...">
// 					<li class="list-group-item">${temp} Degrees.</li>
// 					<li class="list-group-item">Description: ${weather.weather[0].description}</li>
// 					<li class="list-group-item">Humidity: ${weather.main.humidity}</li>
// 					<li class="list-group-item">Wind: ${weather.wind.speed}</li>
// 					<li class="list-group-item">Pressure: ${weather.main.pressure}</li>
// 					</ul>
// 					`;
// 				weatherCardsDiv.appendChild(cardDiv);
// 			}
// 		})
// };

//

// function dateFromTimeStamp(timeStamp) {
// 	let dateTime = new Date(timeStamp * 1000);
// 	let year = dateTime.getFullYear();
// 	let month = String(dateTime.getMonth() + 1).padStart(2, '0');
// 	let day = String(dateTime.getUTCDate()).padStart(2, '0');
// 	let hours = dateTime.getHours();
// 	return `${dayOfTheWeek}${year}-${month}-${day} ${hours}:00`;
// }

// fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
// 	`lat=29.426825118534886&lon=-98.48948239256946` +
// 	`&appid=${OPEN_WEATHER_API_KEY}` +
// 	`&units=imperial`)
// 	// Use the Fetch API to make a GET request to the URL
// 	.then(data => data.json()) // Parse the response as JSON
// 	.then(forecast => {
// 		// Log the forecast data to the console
// 		console.log(forecast);
// 		for (let i = 0; i < data.list.length; i+=8){
// 			generateWeatherCard(forecast)
// 		}

// Extract the date from the forecast data
// const date = new Date(forecast.dt * 1000);
// // Log the year of the date to the console
// console.log(date.getFullYear());


