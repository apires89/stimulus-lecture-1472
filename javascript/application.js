import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import MoviesController from "./controllers/movies_controller.js"
Stimulus.register("movies", MoviesController)


// const button = document.querySelector("#click-me");

// button.addEventListener("click", (event) => {
//   console.log(event);
//   event.currentTarget.classList.remove("btn-primary");
//   event.currentTarget.classList.add("btn-danger");
//   event.currentTarget.innerText = "Bingo!";
// })
