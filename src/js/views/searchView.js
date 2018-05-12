import { element, renderLoader } from '../element';

export const searchInput = () => element.searchField.value;

export const clearInput = () => element.searchField.value = '';

export const clearSearchResults = () => element.recipeResultList.innerHTML = '';

export const clearSearchNextBtns = () => element.recipeResultPage.innerHTML = '';

/** changes based on the new edamam API */
const renderRecipe = (recipe) => {
    const markup = `
        <li>
            <a class="likes__link" href="#${recipe.recipe.uri}">
                <figure class="likes__fig">
                    <img src="${recipe.recipe.image}" alt="Test">
                </figure>
                <div class="likes__data">
                    <h4 class="likes__name">${recipe.recipe.label}</h4>
                    <p class="likes__author">${recipe.recipe.source}</p>
                </div>
            </a>
         </li>
    `;
    element.recipeResultList.insertAdjacentHTML('beforeend', markup);
}

const createButton = (page, type) => element.recipeResultPage
    .insertAdjacentHTML('afterbegin',
        ` 
        <button class="btn-inline results__btn--${type}" data-go-to=${type === 'prev' ? page - 1 : page + 1}>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
        <span>Page ${page}</span>
        </button>
`);

export const renderResult = (recipes, page = 1, toBeDisplayed = 10) => {
    const pages = recipes.length / toBeDisplayed;
    const start = (page-1) * toBeDisplayed;
    const end = page * toBeDisplayed;
    recipes.slice(start, end).forEach(renderRecipe);
};

export const renderButtons = (page = 1, recipes, toBeDisplayed) => {
    const pages = recipes.length / toBeDisplayed;
    if (page == 1) {
        createButton(page, 'next');
    } else if (page == pages) {
        createButton(page, 'prev');
    } else {
        createButton(page + 1, 'next');
        createButton(page - 1, 'prev');
    }
}

const formatContent = (content, length = 18) => {
    if (content.length > length) {
        let amazing =
            content.split(' ').reduce((accumulator, currentContent) => {
                if (accumulator.length + currentContent.length <= length) {
                    console.log(`${accumulator} ${currentContent}`);
                    return `${accumulator} ${currentContent}`;
                }
                console.log(accumulator);
                return accumulator;
            }, '');
        console.log(amazing.concat('...'));
    }
    return content;
}


