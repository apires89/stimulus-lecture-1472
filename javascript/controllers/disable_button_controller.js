import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["link","button"]

  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  disable() {
    console.log(this.element)
    // this.element ==> element that has the data-controller on it
    // event listener ==> data-action="event->data-controller#method"
    this.buttonTarget.innerText = "Bingo!";
    this.buttonTarget.setAttribute("disabled","");
    this.linkTarget.classList.remove("d-none");
  }

  reset() {
    this.linkTarget.classList.add("d-none");
    this.buttonTarget.removeAttribute("disabled");
  }
}
