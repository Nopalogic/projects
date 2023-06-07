const images = document.getElementById('images');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const image = document.querySelectorAll('#images img');

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
	idx++;
	changeImage();
}

function changeImage() {
	if (idx > image.length - 1) {
		idx = 0;
	} else if (idx < 0) {
		idx = image.length - 1;
	}

	images.style.transform = `translateX(${-idx * 1024}px)`;
}

function resetInterval() {
	clearInterval(interval);
	interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
	idx++;
	changeImage();
	resetInterval();
});

leftBtn.addEventListener('click', () => {
	idx--;
	changeImage();
	resetInterval();
});
