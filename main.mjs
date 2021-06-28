const interval = 4000;
const images = document.querySelectorAll("svg");
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

rollImage();
setInterval(rollImage, interval);
