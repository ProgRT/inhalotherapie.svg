const interval = 4000;
const images = document.querySelectorAll("svg");
var rolInterval;
var curentImage;

function* infiniteLoop(max){
	for (var index = 0 ; ; index ++) yield index % max;
}

let imgIterator = infiniteLoop(images.length);

function rollImage(){
	curentImage = imgIterator.next().value;
	for(let img of images)img.classList.add('hidden');
	images[curentImage].classList.remove('hidden');
};

document.querySelector("body").onclick = startRoling;

function startRoling(){
	document.querySelector('body').classList.add('roling');
	rollImage();
	rolInterval = setInterval(rollImage, interval);
	document.querySelector("body").onclick = stopRoling;
}

function stopRoling(){
	clearInterval(rolInterval);
	document.querySelector('body').classList.remove('roling');
	document.querySelector("body").onclick = startRoling;
}
