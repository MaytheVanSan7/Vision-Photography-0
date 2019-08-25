
let wedding = document.querySelector(".wedding");
let titel = document.querySelector('#wedding')
wedding.addEventListener("mouseover", toevoegen)
wedding.addEventListener("mouseout", verwijderen)
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
