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
        id: 1596168522409,
    },
];

const renderCard = () => {
    // check the recipes collection
    recipes.forEach(recipe => {
        const myHTML =
            `
					<section class="section">
					<div>
						<h1>${recipe.title}</h1>
						<ul class="container>
						<li>
						<p class="recipe-photo">
							<img src="${recipe.picture}" alt="Delicious recipe">
						</p>
						</li>
						<li>
							<p class="timing">It's cooked during${recipe.timing}min</p>
						</li>
						<li>
							<p class="difficulty">Difficulty:${recipe.difficulty}</p>
						</li>
						</ul>
						<button class="button">
							More Information
						</button>
					</div>
					</section>
					`;
        console.log(myHTML);
        // check the recipes collection
        // generate the HTML
        // put it in the DOM
        const grabBody = document.querySelector('body');
        grabBody.insertAdjacentHTML('beforeend', myHTML);
    });
}

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);