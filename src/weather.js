const weatherContainer = document.getElementById("weather");
const weather = [];
let displayWeather = "DETECTING...";
		
function onGetGeoSuccess(posision)
{
	const lat = posision.coords.latitude;
	const lon = posision.coords.longitude;
	const API_KEY = "c72fa06e3b4d98f20cdf76a3922451a6";
	const apiStr = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(apiStr).then(response => response.json()).then(data => {
		displayWeather = `Location : ${data.name} || Weather : ${data.weather[0].main} || Temperture : ${data.main.temp}`;
		
		const p = document.createElement("p");
		p.innerText = displayWeather;
		weatherContainer.appendChild(p);
	});
}

function onGetGeoError()
{
	alert("Can't Find you. Please check your Internet connect");
}
navigator.geolocation.getCurrentPosition(onGetGeoSuccess, onGetGeoError);

