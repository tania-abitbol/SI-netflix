import ar from "../assets/imdb/film.json";

const apiKey = "b854e1ce&t";
const films = ar.list.map((f) => f.split(" - ")[0]);

//this call api async let us access to the ID of the film list selected & push inside the div class img the poster image & info
function apiCall(list, elem, j = 0) { //list = sliderItem (look the call function)
  
  let listlen = list.length;

  if (j === listlen) { // Stop condition recursivity
    return;
  }
  console.log("HEYHEYHEYEHEYEHYEHY", typeof elem);
  
  let randomNumber = Math.floor(Math.random() * films.length - 1 + 1);
  let randomMovie = films[randomNumber];
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}=${encodeURI(randomMovie)}`)
    .then((data) => data.json())
    .then((response) => {

      
      var image = response.Poster;
      if (image !== "N/A" && typeof image !== "undefined") { //if image have an url put this one inside the index of list; 
      var title = response.Title;
      var genre = response.Genre;
      var released = response.Released ;
      var actors = response.Actors;
      var synopsis =  response.Synopsis;
      var score =  response.Score;
      var info = title + genre + released + actors + synopsis + score;

        list[j].style.backgroundImage = `url("${image}")`;
        var res = elem[j].appendChild(document.createElement("ul"))
        var li = res.appendChild(document.createElement("li"));
        res.textContent += `${info}`;

        j++;
        apiCall(list, elem, j);
      } else {
        apiCall(list,elem, j); //recursive function beacause fonction call fonction
      }
    });
}
let sliderItem = document.getElementsByClassName("sliders__item--img"); //Selection of div class name
let texte = document.querySelectorAll(".sliders__item--details");
apiCall(sliderItem, texte); //function call the var with the classname = (sliderItem = list) && (texte = elem)
