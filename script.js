//* API Key: df23e141e5849f2396ad851c2744c80c
//* Example API Request: https://api.themoviedb.org/3/movie/550?api_key=df23e141e5849f2396ad851c2744c80c


//In HTML: Have the ability for the user to input year and genre, and create an empty <ul> to contain ✔

//Create an app object✔
const cinemaHunters = {}

//Set up API key/url✔
cinemaHunters.apiKey = 'df23e141e5849f2396ad851c2744c80c';
cinemaHunters.apiUrl = 'https://api.themoviedb.org/3';

//make a method to define how to get the listings from the API

cinemaHunters.getMovies = (genreChoice) => {
    const url = new URL(`${cinemaHunters.apiUrl}/discover/movie`);
    url.search= new URLSearchParams({
        api_key: cinemaHunters.apiKey,
        with_genres: genreChoice,
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
    })
}

//Store the user inputs as variables

cinemaHunters.setUpEventListeners = () => {
    document.getElementById('genre').addEventListener('change',(event) => { 
        const genreChoice = event.target.value
        cinemaHunters.getMovies(genreChoice); 
    })   
}


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

