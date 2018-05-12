export const element = {
    searchContainer: document.querySelector('.results'),
    search: document.querySelector('.search__btn'),
    searchField: document.querySelector('.search__field'),
    recipeResultList: document.querySelector('.results__list'),
    recipeResultPage: document.querySelector('.results__pages')
}

const spinner = {
    loader: 'loader'
};

export const renderLoader = (parent) => {
    const spinner = `
    <div class="loader">
        <svg>
            <use href="img/icons.svg#icon-cw">
        </svg>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', spinner);
}
export const removeLoader = (parent) => {
    parent.removeChild(document.querySelector('.loader'))
}