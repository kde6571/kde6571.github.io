const weatherContainer = document.getElementById("weather");
const weather = [];
		
function onGetGeoSuccess(posision)
{
	const lat = posision.coords.latitude;
	const lon = posision.coords.longitude;
	const API_KEY = "c72fa06e3b4d98f20cdf76a3922451a6";
	const apiStr = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(apiStr).then(response => response.json()).then(data => {
		
		weather.push("Location : " + data.name);
		weather.push(" || Weather : " + data.weather[0].main);
		weather.push(" || Temperture : " + data.main.temp);	
		
		for(let T = 0 ; T < 3 ; T ++)
		{
			const span = document.createElement("span");
			weatherContainer.appendChild(span);
			
			span.innerText = weather[T];
		}
	});
}

function onGetGeoError()
{
	alert("Can't Find you. Please check your Internet connect");
}
navigator.geolocation.getCurrentPosition(onGetGeoSuccess, onGetGeoError);

