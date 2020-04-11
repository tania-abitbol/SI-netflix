import movie from "../assets/imdb/best.json";

const apiKey = "b854e1ce&t";
const films = movie.top.map(l);

//this call api let us access to the ID of the film list selected & push inside the div class img the poster image
function apiCallLight(list, j = 0) {
  //list = sliderItem (look the call function)
  if (j === listlen) {
    // Stop function
    return;
  }
  let listlen = list.length;
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}=${encodeURI(films)}`)
    .then((data) => data.json())
    .then((response) => {
      var image = response.Poster;
      if (image !== "N/A" && typeof image !== "undefined") {
        //verification validity response image
        list[j].style.backgroundImage = `url("${image}")`;
        j++;
      }
    });
}
let top = document.getElementsByClassName("sliders__item--img"); //Selection of div class name
apiCallLight(top); //function call the var with the classname = (top = list)
