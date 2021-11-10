//* API Key: df23e141e5849f2396ad851c2744c80c
//* Example API Request: https://api.themoviedb.org/3/movie/550?api_key=df23e141e5849f2396ad851c2744c80c


//* Pseudo Code:

//In HTML: Have the ability for the user to input year and genre, and create an empty <ul> to contain

//Store the user inputs as variables

//Create an app object

//Set up API key/url

//fetch the API using url variable
	//pass call back function to retrieve info from API
	//parse API into JSON to return an array

//filter the JSON array with the user inputs and return only the results matching the selectedyear & genre

//create a method to display list
	//query the DOM for ul
	//create a loop that populates each returned item onto the page


//create an init that runs the retrieve, filter and display methods

//call init