//* API Key: df23e141e5849f2396ad851c2744c80c

//In HTML: Have the ability for the user to input year and genre, and create an empty <ul> to contain ✔

//Create an app object
const cinemaHunters = {}

//Set up API key/url
cinemaHunters.apiKey = 'df23e141e5849f2396ad851c2744c80c';
cinemaHunters.apiUrl = 'https://api.themoviedb.org/3/movie/550';

cinemaHunters.getMovies = () => {
    const url = new URL(cinemaHunters.apiUrl);
    url.search= new URLSearchParams({
        api_key: cinemaHunters.apiKey
    })
}

console.log(cinemaHunters)
//Store the user inputs as variables


//fetch the API using url variable
	//pass call back function to retrieve info from API
	//parse API into JSON to return an array

//filter the JSON array with the user inputs and return only the results matching the selected year & genre

//create a method to display list
	//query the DOM for ul
	//create a loop that populates each returned item onto the page


//create an init that runs the retrieve, filter and display methods

//call init