/*=====================================================*/
/*            JS for adding for display on website    */

const { rootCertificates } = require("tls");

/*=====================================================*/
const app = document.getElementById('myAPI')
// const userText = document.getElementById("form-group")
// userText.addEventListener("submit", translateText()); 

const container=document.createElement('div'); 
container.setAttribute('class', 'container row justify-content-center '); 
app.appendChild(container); 

function loadAPIS(){
    // loadAnimeAPI(); 
    // loadSWAPI(); 
    // loadWeatherAPI(); // not working because of city  

    // loadTravelSearch(); 

}

loadAPIS() 
/*=====================================================*/
/*              Anime API                          */
/*=====================================================*/

function loadAnimeAPI() {
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

data.forEach((movie) => {
  // Log each movie's title
  console.log(movie.title)
    // Create a div with a card class
    const card = document.createElement('div')
    card.setAttribute('class', 'card p-3 col-lg-3 col-md-4')
  
    // Create an h1 and set the text content to the film's title
    const h1 = document.createElement('h1')
    h1.textContent = movie.title
  
    // Create a p and set the text content to the film's description
    const p = document.createElement('p')
    movie.description = movie.description.substring(0, 300) // Limit to 300 chars
    p.textContent = `${movie.description}...` // End with an ellipses
  
    // Append the cards to the container element
    container.appendChild(card)
  
    // Each card will contain an h1 and a p
    card.appendChild(h1)
    card.appendChild(p)
  
})
}

// Send request
request.send()
}

/*=====================================================*/
/*             Star Wars API                    */
/*=====================================================*/

function loadSWAPI () {
// Create a request variable and assign a new XMLHttpRequest object to it.
var swReq = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
swReq.open('GET', 'https://swapi.dev/api/planets/', true)

swReq.onload = function () {
  // Begin accessing JSON data here
  var data1 = JSON.parse(this.response)
    console.log(data1.results); 
  var planets = data1.results; 
  planets.forEach((planet) => {
      console.log(planet)

       // Create a div with a card class
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
  
    // Create an h1 and set the text content to the film's title
    const h1 = document.createElement('h1')
    h1.textContent = planet.name
  
    // Create a p and set the text content to the film's description
    const p = document.createElement('p')
    planet.climate = planet.climate // Limit to 300 chars
    p.textContent = `Climate: ${planet.climate}` // End with an ellipses
  
    // Append the cards to the container element
    container.appendChild(card)
  
    // Each card will contain an h1 and a p
    card.appendChild(h1)
    card.appendChild(p)
  })
// data1.forEach((planet) => {
//   // Log each movie's title
//   console.log(planet.name)
   
  
// })
}

// Send request
swReq.send()

}



// /*=====================================================*/
/*                 Weather API                  */
/*=====================================================*/
function loadWeatherAPI() {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    xhr.open("GET", "https://community-open-weather-map.p.rapidapi.com/weather?q=London%252Cuk");
    xhr.setRequestHeader("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "04ba4d4b0cmsh55c52abd7526c48p1fe391jsne18c605c550b");
    xhr.send(data);
    
    }
    //  xhr.setRequestHeader("x-rapidapi-key", "[04ba4d4b0cmsh55c52abd7526c48p1fe391jsne18c605c550b]");
    


    /*=====================================================*/
    /*          Travel API    using API Key                */
    /*=====================================================*/
    function loadTravelSearch () {
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false; // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                loadTravelCards(this.responseText); 
            }
        });

        xhr.open("GET", "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=new%20york");
        xhr.setRequestHeader("x-rapidapi-host", "hotels4.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "04ba4d4b0cmsh55c52abd7526c48p1fe391jsne18c605c550b");

        xhr.send(data);
    }

    function loadTravelCards(res){
        console.log(res); 

    }

    function ValidationEvent(){
        
        var usrText = document.getElementById("usrText").nodeValue; 
        console.log(usrText); 
    }
