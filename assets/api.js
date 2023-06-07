const apiProjects = [
	{
		title: 'Matrix Calculator',
		description: 'The app for calculate matrix.',
		url: './matrix-calculator/index.html',
		imageUrl: './assets/images/matrix-calculator.png',
	},
	{
		title: 'Background Slider',
		description: 'Lorem ipsum dolor sit amet.',
		url: './background-slider/index.html',
		imageUrl: './assets/images/background-slider.png',
	},
	{
		title: 'Expanding Cards',
		description: 'Lorem ipsum dolor sit amet.',
		url: './expanding-cards/index.html',
		imageUrl: './assets/images/expanding-cards.png',
	},
	{
		title: 'Skeleton Load',
		description: 'Lorem ipsum dolor sit amet.',
		url: './skeleton-loading/index.html',
		imageUrl: './assets/images/img.png',
	},
	{
		title: 'Progress Steps',
		description: 'Lorem ipsum dolor sit amet.',
		url: './progress-steps/index.html',
		imageUrl: './assets/images/img.png',
	},
];

function displayProject() {
	let cards = '';
	apiProjects.forEach((m) => (cards += showProject(m)));
	const projectContainer = document.querySelector('.project-container');
	projectContainer.innerHTML = cards;
}

function showProject(project) {
	return `
	<a href="${project.url}">
		<figure class="card">
      <img src="${project.imageUrl}" alt="" />
      <figcaption class="card-caption">
				<div>
					<h3>${project.title}</h3>
					<p>${project.description}</p>
				</div>
			</figcaption>
		</figure>
	</a>
		`;
}

displayProject();
