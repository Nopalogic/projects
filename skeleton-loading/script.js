const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-txt');

setTimeout(getData, 2000);

function getData() {
	header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
	title.innerHTML = 'Lorem ipsum dolor sit amet';
	excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
	profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
	name.innerHTML = 'Nopal';
	date.innerHTML = 'Nov 02, 2003';

	animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
	animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
