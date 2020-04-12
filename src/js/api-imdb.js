import ar from "../assets/imdb/film.json";

const apiKey = "b854e1ce&t";
const films = ar.list.map((f) => f.split(" - ")[0]);

//this call api with jquery let us access to the ID of the film list selected & push inside the div class img the poster image
function apiCall(list, j = 0) {
  //list = sliderItem (look the call function)

  let listlen = list.length;

  if (j === listlen) {
    // Stop condition recursivity
    return;
  }
  let randomNumber = Math.floor(Math.random() * films.length - 1 + 1);
  let randomMovie = films[randomNumber];
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}=${encodeURI(randomMovie)}`)
    .then((data) => data.json())
    .then((response) => {
      var image = response.Poster;
      if (image !== "N/A" && typeof image !== "undefined") {
        //if image have an url put this one inside the index of list
        list[j].style.backgroundImage = `url("${image}")`;
        j++;
        apiCall(list, j);
      } else {
        apiCall(list, j); //recursive function beacause fonction call fonction
      }
    });
}
let sliderItem = document.getElementsByClassName("sliders__item--img"); //Selection of div class name
apiCall(sliderItem); //function call the var with the classname = (sliderItem = list)
