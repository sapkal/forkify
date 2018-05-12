import Search from './models/Search'
import { element, renderLoader, removeLoader } from './element'
import * as searchView from './views/searchView'

/**
 * global state of the app
 * search object 
 * current recipe object 
 * shopping list object
 * liked recipe
 */
const state = {};

const controlSearch = async (page, toBeDisplayed) => {
    //     let query = new Search('chicken');
    //     // usin then we can write the same logic as below
    //    // const val = query.getResult().then(()=> console.log(query.result));
    //    await query.getResult();
    //    console.log(query.result)


    //in the app we get the input from the search button 
    const query = searchView.searchInput();
    if (query) {
        searchView.clearSearchResults();
        searchView.clearSearchNextBtns();
        renderLoader(element.recipeResultList);
        // updates the search and add to state so we create an object of type search to state
        state.search = new Search(query);
        // update the UI that the search is being processed: add a spinner
        try {
            //get the data
            await state.search.getResults();
            removeLoader(element.recipeResultList);
            //render the data to the ui
             searchView.renderResult(state.search.result);
             searchView.renderButtons(page,state.search.result,10);
        }
        //console.log(state.search.result);
        catch (error) {
            console.log(error);
        }
    }
}

function onClick(event) {
    event.preventDefault();
    controlSearch();
}

element.search.addEventListener('click', onClick);
element.recipeResultPage.addEventListener('click',e =>{
    const button = e.target.closest('.btn-inline');
    searchView.clearSearchResults();
    searchView.clearSearchNextBtns();
    searchView.renderResult(state.search.result,button.dataset.goTo);
    searchView.renderButtons(button.dataset.goTo,state.search.result,10);
    
});