import { Controller } from 'stimulus'


export default class extends Controller {
  static targets = ["input","results"]
  static values = {
    baseUrl: String
  }

  connect() {
    console.log("Hello from our movies controller");
  }

  fetchMovies(query) {
    //receive a keyword
    //search
    fetch(`${this.baseUrlValue}/?s=${query}&apikey=adf1f2d7`)
    .then((response => response.json()))
    .then((data) => this.insertMovies(data))
  }

  insertMovies(data) {
    data.Search.forEach(movie => {
        const movieli = `<li class="list-group-item border-0">
        <img src="${movie.Poster}" alt="${movie.Title}" width="100" height="100%">
      </li>`
        //insert the data into the html
        this.resultsTarget.insertAdjacentHTML("beforeend",movieli)
      });
  }

  search(event) {
    //prevent default behaviour
    event.preventDefault();
    //clear previous searches
    this.resultsTarget.innerHTML = "";
    //call the method
    this.fetchMovies(this.inputTarget.value)
  }


}
