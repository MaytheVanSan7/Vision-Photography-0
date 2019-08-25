
let restaurant = document.querySelector(".nomad");
let titel = document.querySelector('#nomad');
restaurant.addEventListener("mouseover", toevoegen);
restaurant.addEventListener("mouseout", verwijderen);
function toevoegen() {
  console.log("ok");
  let tekst = this.getAttribute("data-text");
  titel.innerHTML = tekst;
}
function verwijderen() {
  console.log("yay");
  let tekst = this.getAttribute("");
  titel.innerHTML = tekst;
}
