//* API Key: df23e141e5849f2396ad851c2744c80c
//* Example API Request: https://api.themoviedb.org/3/movie/550?api_key=df23e141e5849f2396ad851c2744c80c

//! All spots involving the year are marked with //! (in case we need to remove them)

//In HTML: Have the ability for the user to input year and genre, and create an empty <ul> to contain ✔

//Create an app object✔
const cinemaHunters = {}

//Set up API key/url✔
cinemaHunters.apiKey = 'df23e141e5849f2396ad851c2744c80c';
cinemaHunters.apiUrl = 'https://api.themoviedb.org/3';

//make a method to define how to get the listings from the API
cinemaHunters.getMovies = (genreChoice, year) => { //!
    const url = new URL(`${cinemaHunters.apiUrl}/discover/movie`);
    url.search= new URLSearchParams({
        api_key: cinemaHunters.apiKey,
        with_genres: genreChoice,
        // release_date: year //!
    })
    //fetch the API using url variable✔
	//pass call back function to retrieve info from API✔
	//parse API into JSON to return an array✔
    fetch (url)
    .then ((response)=>{
        return response.json()
    })
    .then((jsonResponse) =>{
        cinemaHunters.displayMovies(jsonResponse.results)
        console.log(jsonResponse.results) //*CONSOLE LOG HERE*/
    })

    //Create a filter to sort out the films based on user selection for year, and then return only those results //! Will also need to change the displayMovies function? (line 73)
    // let filteredMovies = jsonResponse.results.filter(film => {
    //     return obj.release_date == `${year}`;
    // })

}

// console.log(cinemaHunters)

//Store the user inputs as variables

cinemaHunters.setUpEventListeners = () => {
    document.getElementById('genre', 'decade').addEventListener('change',(event) => { //!
        const genreChoice = event.target.value
        const year = event.target.value //!

        cinemaHunters.getMovies(genreChoice, year); //!
        // console.log(year);
    })   
}



//filter the JSON array with the user inputs and return only the results matching the selectedyear & genre


//filter the JSON array with the user inputs and return only the results matching the selected year & genre


//create a method to display list
	//query the DOM for ul
	//create a loop that populates each returned item onto the page

    cinemaHunters.displayMovies = ((arrayDataFromAPI)=> {
        const ul = document.querySelector('ul');
        ul.innerHTML = '';
        
        arrayDataFromAPI.forEach((movie) => {
            const movieListing = document.createElement('li');
            
            const movieTitle = document.createElement('h2');
            movieTitle.innerText = movie.title;

            const movieDescription = document.createElement('p');
            movieDescription.innerText = movie.overview;

            movieListing.appendChild(movieTitle);
            movieListing.appendChild(movieDescription);

            //display on the page
            ul.appendChild(movieListing);
        })
    })

//create an init that sets up the get, filter and display methods

cinemaHunters.init = () => {
    cinemaHunters.setUpEventListeners() 
}


//call init

cinemaHunters.init();
