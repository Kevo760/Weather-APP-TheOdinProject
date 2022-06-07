
// Search city 
function searchBarUI() {
    const searchBar = document.createElement('div');
    searchBar.classList.add('search-bar');


    // Input for city search
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'search-city';
    input.placeholder = 'Enter a City';

    // Submit button for city search
    const searchBtn = document.createElement('button');
    searchBtn.id = 'search-btn';
    searchBtn.innerText = 'Search';

    searchBar.append(input);
    searchBar.append(searchBtn);

    return document.body.append(searchBar);
};


export{ searchBarUI }