import ar from '../assets/imdb/film.json';

/*Put inside an array the .json object/array & cut of the bad terms inside the string */
var films = [];
for (let i = 0; i < ar.list.length; i++) {
  var film = ar.list[i].substring(0, ar.list[i].indexOf(' -'));
  films.push(film);
}


/*this call api with jquery let us access to the ID of the film list selected
& push inside the div class img the poster image*/
function apiCall(list, j = 0) { //list = sliderItem (look the call function)
  
  let listlen = list.length;

  if (j === listlen) { // Stop condition recursivity
    return
  }
    let randomNumber = Math.floor((Math.random() * films.length - 1) + 1);
    let randomMovie = films[randomNumber];
    $.getJSON('http://www.omdbapi.com/?apikey=b854e1ce&t=' + encodeURI(randomMovie)).then(function(response) {
      var image = response.Poster;
      if (image !== "N/A" && typeof image !== "undefined") {  //if image have an url put this one inside the index of list
        list[j].style.backgroundImage = `url("${image}")`;
        list[j].style.backgroundSize = "cover";
        list[j].style.backgroundPosition = "center";
        j++;
        apiCall(list, j);
      }
      else {
        apiCall(list, j); //recursive function beacause fonction call fonction
      }
    })
};  
let sliderItem = document.getElementsByClassName('slider__item--img') //Selection of div class name  
apiCall(sliderItem);  //function call the var with the classname = (sliderItem = list)