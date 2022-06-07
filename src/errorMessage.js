import { contentUI } from "./content";

function errorMessage() {

    const errorMess = document.createElement('div');
    errorMess.classList.add('error-message');
    errorMess.innerText = 'Please enter a valid city';

   const content = contentUI();
   content.append(errorMess);
   return document.body.append(content);
};



export {errorMessage};