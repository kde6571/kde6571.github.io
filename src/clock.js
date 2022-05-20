const clock = document.querySelector(".clock");

function changeTime()
{
	const today = new Date();

	const hour = today.getHours();
	const minute = today.getMinutes();
	const second = today.getSeconds();

	clock.innerText = `${hour} : ${minute} : ${second}`;
}

changeTime();
setInterval(changeTime, 1000);