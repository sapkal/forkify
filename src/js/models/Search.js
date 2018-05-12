import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    /**
     * Updating the API service from food to fork to https://www.edamam.com/.
     * 
     * Check out https://developer.edamam.com/edamam-recipe-api for details.
     */
    async getResults() {
        try {
            const APP_KEY = 'f9639352b1a770a4403b5c87fbea1b85';
            const APP_ID = 'f2e06cfc';
            // no longer needed for edamam since CORS is handelded by edamam.
            //const proxy = 'https://cors-anywhere.herokuapp.com/';

            //const res = await axios(`${proxy}http://food2fork.com/api/search?key=${API_KEY}&q=${this.query}`);
            const res = await axios(`https://api.edamam.com/search?q=${this.query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=30`);
            this.result = res.data.hits;
        } catch (error) {
            console.log(error);
        }
    }
}
