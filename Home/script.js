
let portret = document.querySelector(".portrets");
let titel = document.querySelector('#portrets')
portret.addEventListener("mouseover", toevoegen)
portret.addEventListener("mouseout", verwijderen)
function toevoegen() {
  console.log("ok");
  let tekst = this.getAttribute("data-text")
  titel.innerHTML = tekst;
}
function verwijderen() {
  console.log("yay");
  let tekst = this.getAttribute("")
  titel.innerHTML = tekst;
}

let wedding = document.querySelector(".wedding");
let titel2 = document.querySelector('#wedding')
wedding.addEventListener("mouseover", voegtoe)
wedding.addEventListener("mouseout", verwijder)
function voegtoe() {
  console.log("ok");
  let tekst2 = this.getAttribute("data-text")
  titel2.innerHTML = tekst2;
}
function verwijder() {
  console.log("yay");
  let tekst2 = this.getAttribute("")
  titel2.innerHTML = tekst2;
}
let restaurant = document.querySelector(".restaurant");
let titel3 = document.querySelector('#nomad')
restaurant.addEventListener("mouseover", voeg)
restaurant.addEventListener("mouseout", weg)
function voeg() {
  console.log("ok");
  let tekst3 = this.getAttribute("data-text")
  titel3.innerHTML = tekst3;
}
function weg() {
  console.log("yay");
  let tekst3 = this.getAttribute("")
  titel3.innerHTML = tekst3;
}
