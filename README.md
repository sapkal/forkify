# forkify
## Description
Get Delicious yet Nutritious Recipes based on the mood ;)
The app is a replication of website by Jonas Schmedtmann

## Major Differences
* Usages of EDAMAM Recipe Search API instead of food2fork.  https://developer.edamam.com/edamam-recipe-api
* Update to `/src/js/models/Search.js` with the new endpoint details for which can be found under `https://developer.edamam.com/edamam-docs-recipe-api`.
* Updates to renderRecipe functions based on the new endpoint changes `/src/views/searchView.js`. 
## How To Use It
* Create a free developer account on https://developer.edamam.com/edamam-recipe-api
* Navigate to `https://developer.edamam.com/admin/applications`
* Click on View to get the `Application ID
` and the `Application Keys
` for Recipe Search API. 
*  run `npm install`
*  Start the app locally using `npm run start`.
