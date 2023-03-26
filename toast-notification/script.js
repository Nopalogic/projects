const button = document.getElementById('button');
const toast = document.getElementById('toast');

const messages = ['message', 'success message', 'error message'];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

const createNotification = (message = null, type = null) => {
	const notif = document.createElement('div');
	notif.classList.add('toast');
	notif.classList.add(type ? type : getRandomType());

	notif.innerHTML = message ? message : getRandomMessage();

	toast.appendChild(notif);

	setTimeout(() => {
		notif.remove();
	}, 3000);
};

const getRandomType = () => {
	messages[Math.floor(Math.random() * types.length)];
};

const getRandomMessage = () => {
	messages[Math.floor(Math.random() * messages.length)];
};
