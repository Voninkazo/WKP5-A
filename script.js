console.log('HELLO');

const recipes = [{
        title: 'Eggs',
        picture: 'https://bit.ly/2ZXyiKI',
        author: 'Harisoa',
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
        title: 'Meat',
        picture: 'https://bit.ly/2ZXyiKI',
        author: 'Sandy',
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
        title: 'Chicken',
        picture: 'https://bit.ly/2ZXyiKI',
        author: 'Alice',
        difficulty: 'easy',
        timing: '15',
        ingredients: ['eggs', 'salt', 'water'],
        steps: [
            'Put a pan on the fire',
            'Crack the eggs on it',
            'Wait, put them out',
            'Add some salt on it',
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
					<section class="section" data-id=  "${recipe.id}">
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

//  grab all modals
const btns = document.querySelector('.button-info');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');

// show modal
const openModal = () => {
    outerModal.classList.add('open');
}

// handle escape
const closeModal = event => {
    const isOutside = !event.target.closest('.inner-modal');
    if (isOutside) {
        outerModal.classList.remove('open');
    }
};

// listen for the escape key
window.addEventListener('click', closeModal);

// handle button info click
window.addEventListener('click', event => {
    if (event.target.matches('.button-info')) {
        const parents = event.target.closest('.section');
        const id = Number(parents.dataset.id);
        console.log('id', id);
        console.log('recipes', recipes);
        const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
        console.log('recipe', recipe);
        openModal();
        // create the outer modal that containes the recipe details
        const myRecipe = `
          <section>
              <h2> ${recipe.title} by <small> ${recipe.author} </small></h2>
              <p class="recipe-photo">
                  <img src="${recipe.picture}" alt="Delicious recipe">
              </p>
              <p class="timing">It's cooked during ${recipe.timing}min</p>
              <p class="difficulty">Difficulty: ${recipe.difficulty}</p>
              <ul>
                <p>
                Follow these following steps
                </p>
                <li> ${recipe.steps}</li>
                <p>
                And these are the ingredients
                </p>
                <li> ${recipe.ingredients}</li>
            </ul>
        </section>
        `;
        // put it in the DOM
        const grabModal = document.querySelector('.inner-modal');
        grabModal.insertAdjacentHTML('beforeend', myRecipe);
    }
});