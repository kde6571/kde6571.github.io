const main = document.querySelector("body");
const img = "./BG_IMG/" + Math.floor(Math.random() * 3) + ".jpg";
const style = main.style;

style.backgroundImage=`url(${img})`;