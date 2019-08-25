
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
