//* API Key: df23e141e5849f2396ad851c2744c80c
//* Example API Request: https://api.themoviedb.org/3/movie/550?api_key=df23e141e5849f2396ad851c2744c80c

//In HTML: Have the ability for the user to input year and genre, and create an empty <ul> to contain ✔

//Create an app object✔
const cinemaHunters = {}

//Set up API key/url✔
cinemaHunters.apiKey = 'df23e141e5849f2396ad851c2744c80c';
cinemaHunters.apiUrl = 'https://api.themoviedb.org/3/movie/550';
//add endpoints?
cinemaHunters.endPoints = 'https://api.themoviedb.org/3/genre/movie/list?api_key=df23e141e5849f2396ad851c2744c80c'

//make a method to define how to get the listings from the API
cinemaHunters.getMovies = () => {
    const url = new URL(cinemaHunters.apiUrl);
    url.search= new URLSearchParams({
        api_key: cinemaHunters.apiKey,
        list: genreChoice
    })
}

//! How can we build the URL to search specifically for the parameters we are filtering for? Can we use more than one end point at a time?

console.log(cinemaHunters)

//Store the user inputs as variables

cinemaHunters.setUpEventListeners = () => {
    document.getElementById('genre').addEventListener('change',(event) => {
        const genreChoice = event.target.value
        cinemaHunters.displayMovies(genreChoice)
        
    })

    //! How do we create a duplicate event listener (one for each dropdown) without duplicating unnecessarily? Does this need to be a filter?
    
    
 }

//fetch the API using url variable✔
	//pass call back function to retrieve info from API✔
	//parse API into JSON to return an array✔
fetch (url)
    .then ((response)=>{
        return response.json()
    })
    .then((jsonResponse) =>{
        cinemaHunters.displayMovies(jsonResponse)
    })

//filter the JSON array with the user inputs and return only the results matching the selectedyear & genre


//filter the JSON array with the user inputs and return only the results matching the selected year & genre


//create a method to display list
	//query the DOM for ul
	//create a loop that populates each returned item onto the page

    cinemaHunters.displayMovies = ((arrayDataFromAPI)=> {
        const ul = document.querySelector('ul');
        
        
        arrayDataFromAPI.forEach((movie) => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = movie.poster_path;
            img.alt = movie.title;
            
            const h2 = document.createElement('h2');
            movieTitle.innerText = movie.title;

            li.appendChild(img);
            li.appendChild(h2);
            ul.appendChild(li);


        })


    })


//create an init that runs the retrieve, filter and display methods

cinemaHunters.init = () => {
    cinemaHunters.getMovies();
    //cinemaHunters.filterMovies();
    cinemaHunters.displayMovies();
}

//call init

cinemaHunters.init();