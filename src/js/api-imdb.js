import { list } from "../assets/imdb/film.js";

const apiKey = "b854e1ce&t";
const films = list.map((f) => f.split(" - ")[0]);

//this call api async let us access to the ID of the film list selected & push inside the div class img the poster image & info
function apiCall(list, elem, j = 0) {
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
        //if image have an url put this one inside the index of list;

        list[j].style.backgroundImage = `url("${image}")`;
        var title = response.Title;
        var genre = response.Genre;
        var released = response.Released;
        //var actors = response.Actors;
        //var synopsis = response.Plot;
        var score = response.imdbRating;

        var res = elem[j].appendChild(document.createElement("div")); //creation balise <ul> & of the lower <li>
        var li = res.appendChild(document.createElement("p"));
        var li2 = res.appendChild(document.createElement("p"));
        // var li3 = res.appendChild(document.createElement("p"));
        // var li4 = res.appendChild(document.createElement("p"));
        // var li5 = res.appendChild(document.createElement("p"));
        var li6 = res.appendChild(document.createElement("p"));

        li.textContent += `Title : ${title}`; //create text inside the <li> with the feature
        li2.textContent += `Genre : ${genre}`;
        // li3.textContent += `Realeased date : ${released}`;
        // li4.textContent += `Actors : ${actors}`;
        // li5.textContent += `Synopsis : ${synopsis}`;
        li6.textContent += `Rating : "${score}/10"`;

        j++;
        apiCall(list, elem, j);
      } else {
        apiCall(list, elem, j); //recursive function beacause fonction call fonction
      }
    });
}
let sliderItem = document.getElementsByClassName("sliders__item--img"); //Selection of div class name
let texte = document.querySelectorAll(".sliders__item--title");
apiCall(sliderItem, texte); //function call the var with the classname = (sliderItem = list) && (texte = elem)
