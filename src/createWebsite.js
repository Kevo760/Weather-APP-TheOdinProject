import { createHeaderUI } from "./headerUI";
import { searchBarUI } from "./searchBar";
import { websiteFunctions } from "./websiteFunctions";





import './style.css';

function generateWebsite() {

    createHeaderUI('Weather App');
    searchBarUI();
    websiteFunctions();
};


export {generateWebsite}