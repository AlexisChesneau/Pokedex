import { TypeBackground } from "./typeBackground.js";

const namePokemon = document.getElementById("namePokemon");
const imgPokemon = document.getElementById("imgPokemon");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const typeContainerTypes = document.getElementById("typeContainerTypes");
const typeContainerSpells = document.getElementById("typeContainerSpells");

const API = `https://tyradex.vercel.app/api/v1/gen/1`;

let indexPokemon = 0;
let data;

fetch(API)
  .then((res) => res.json())
  .then((apiData) => {
    data = apiData;
    afficherPokemon();
  })
  .catch((err) => console.log(err));

function afficherPokemon() {
  const typePokemon = data[indexPokemon].types;
  const spellPokemon = data[indexPokemon].talents;

  const resetElement = document.querySelectorAll(".imgType, .spellName");
  resetElement.forEach((element) => {
    element.remove();
  });

  namePokemon.innerHTML = data[indexPokemon].name.fr;
  imgPokemon.src = data[indexPokemon].sprites.regular;

  for (let i = 0; i < (typePokemon.length, spellPokemon.length); i++) {
    const imgType = document.createElement("img");
    const spellName = document.createElement("p");

    imgType.classList.add("imgType");
    spellName.classList.add("spellName");

    if (i < typePokemon.length) {
      imgType.src = typePokemon[i].image;
      typeContainerTypes.appendChild(imgType);
    }

    if (i < spellPokemon.length) {
      spellName.innerHTML = spellPokemon[i].name;
      typeContainerSpells.appendChild(spellName);
    }
  }
  TypeBackground(typePokemon);
}

function decrementIndex() {
  if (indexPokemon > 0) {
    indexPokemon--;
    nextButton.disabled = false;
  } else {
    previousButton.disabled = true;
  }
}

function incrementIndex() {
  if (indexPokemon < data.length - 1) {
    indexPokemon++;
    previousButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}

function PreviousPokemon() {
  decrementIndex();
  afficherPokemon();
}

function NextPokemon() {
  incrementIndex();
  afficherPokemon();
}

previousButton.addEventListener("click", PreviousPokemon);
nextButton.addEventListener("click", NextPokemon);
