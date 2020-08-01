console.log('HELLO');

const recipes = [{
        title: 'Eggs',
        picture: 'https://bit.ly/2ZXyiKI',
        author: 'Loïc',
        difficulty: 'easy',
        timing: '15',
        ingredients: ['eggs', 'salt', 'water'],
        steps: [
            'Put a pan on the fire',
            'Crack the eggs on it',
            'Wait, put them out',
            'Add some salt on it',
        ],
        id: 1596168482053,
    },
    {
        title: 'Eggs',
        picture: 'https://bit.ly/2ZXyiKI',
        author: 'Loïc',
        difficulty: 'easy',
        timing: '15',
        ingredients: ['eggs', 'salt', 'water'],
        steps: [
            'Put a pan on the fire',
            'Crack the eggs on it',
            'Wait, put them out',
            'Add some salt on it',
        ],
        id: 1596168522409,
    },
    {
        title: 'My recipe',
        picture: 'https://bit.ly/2ZXyiKI',
        author: 'Loïc',
        difficulty: 'easy',
        timing: '15',
        ingredients: ['eggs', 'salt', 'water'],
        steps: [
            'Put a pan on the fire',
            'Crack the eggs on it',
            'Wait, put them out',
            'Add some salt on it',
        ],
        id: 1576168552480,
    },
];

const renderCard = () => {
    // check the recipes collection
    recipes.forEach(recipe => {
        // generate the HTML
        const myHTML =
            `
					<section class="section">
					<div class="wrapper">
						<h1>${recipe.title}</h1>
						<ul class="container>
						<li>
						<p class="recipe-photo">
							<img src="${recipe.picture}" alt="Delicious recipe">
						</p>
						</li>
						<li>
							<p class="timing">It's cooked during ${recipe.timing}min</p>
						</li>
						<li>
							<p class="difficulty">Difficulty: ${recipe.difficulty}</p>
						</li>
						</ul>
						<button class="button-info">
							More Information
						</button>
					</div>
					</section>
					`;
        console.log(myHTML);
        // put it in the DOM
        const grabConatiner = document.querySelector('.container');
        grabConatiner.insertAdjacentHTML('beforeend', myHTML);
    });
}

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);

// 
const btns = document.querySelector('.button-info');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');

// show modal
const openModal = () => {
    outerModal.classList.add('open');
}

// handle escape
const handleEscapeKey = event => {
    if (event.key === 'Escape') {
        outerModal.classList.remove('open');
    }
};

// listen for the escape key
window.addEventListener('keydown', handleEscapeKey);

// handle button info click
window.addEventListener('click', event => {
    if (event.target.matches('.button-info')) {
        const parents = event.target.closest('section');
        const id = Number(parents.dataset.id);
        const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
        openModal(recipe);
    }
});