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
						    <button class="button-info button-primary">
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

// close modal
window.addEventListener('click', closeModal);

// loop through the ingrediets list
// for (let i = 0; i < recipes.length; i++) {
//     const myIngredients = recipes[i].ingredients;
//     myIngredients.forEach(element => {
//         return `<li>${element}</li>`;
//     });

//     //loop through the steps
//     for (let i = 0; i < recipes.length; i++) {
//         const mySteps = recipes[i].steps;
//         mySteps.forEach(element => {
//             return `<li>${element}</li>`;
//         });

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
                  <section class="detailes">
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
                        <ul> ${mySteps}</ul>
                        <p>
                        And these are the ingredients
                        </p>
                        <ul> ${myIngredients}</ul>
                    </ul>
                </section>
                `;
        // put it in the DOM
        const grabModal = document.querySelector('.inner-modal');
        grabModal.insertAdjacentHTML('beforeend', myRecipe);
    }
});


window.addEventListener('click', event => {
    if (event.target.matches('.button-add')) {
        openModal();

        const newRecipe = `
                <form id="addRecipeForm">
                  <label for="title">What's the recipe name?</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="The name of your recipe"
                    value="Eggs"
                  />
                <label for="picture">Picture of the result (URL)</label>
              <input
                type="url"
                id="picture"
                name="picture"
                placeholder="Enter the URL of your picture"
                value="https://bit.ly/2ByKjgb"
              />
              <label for="author">Who's the chef?</label>
              <input
                type="Text"
                name="author"
                id="author"
                placeholder="Type in the chef's name"
                value="Loïc"
              />
              <label for="difficulty">What's the difficulty?</label>
              <select name="difficulty" id="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <label for="timing">How much time does it take?</label>
              <select name="timing" id="timing">
                <option value="<15min">Less than 15 minutes</option>
                <option value="15min">15 minutes</option>
                <option value="30min">30 minutes</option>
                <option value="45min">45 minutes</option>
                <option value="60min">1 hour</option>
                <option value=">60min">More than an hour</option>
              </select>
              <label for="ingredient1">Ingredients</label>
              <ul id="ingredientList">
                <li>
                  <input
                    type="text"
                    id="ingredient1"
                    name="ingredient1"
                    value="Ingredient 1"
                  />
                </li>
                  </ul>
              <button type="button button-secondary" class="addIngredient">
                Add a new ingredient to the list
              </button>
              <label for="step1">Steps</label>
              <ul id="stepList">
                <li>
                  <input type="text" id="step1" name="step1" value="Step 1" />
                </li>
              </ul>
              <button type="button" class="addStep">
                Add a new step to the list
              </button>
              <button type="submit" class="addRecipe button-secondary">Add your recipe</button>
            </form>
            `;
        innerModal.insertAdjacentHTML('beforeend', newRecipe);
    }
});