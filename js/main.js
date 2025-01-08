import { TypeBackground } from "./typeBackground.js";

const namePokemon = document.getElementById("namePokemon");
const imgPokemon = document.getElementById("imgPokemon");
const previousPokemon = document.getElementById("previousPokemon");
const nextPokemon = document.getElementById("nextPokemon");
const previousGeneration = document.getElementById("previousGeneration");
const nextGeneration = document.getElementById("nextGeneration");
const typeContainerTypes = document.getElementById("typeContainerTypes");
const typeContainerSpells = document.getElementById("typeContainerSpells");
const numberGen = document.getElementById("numberGen");
const numberPokemon = document.getElementById("numberPokemon");

let indexGeneration = 1;
let indexGenMin = 1;
let indexGenMax = 1;
numberGen.innerHTML = "Génération N°" + 1;
numberPokemon.innerHTML = "Pokemon N°" + indexGeneration;

let indexPokemon;
let data;

function loadGeneration(indexGen) {
  const API = `https://tyradex.vercel.app/api/v1/gen/${indexGen}`;
  indexPokemon = 0;
  fetch(API)
    .then((res) => res.json())
    .then((apiData) => {
      data = apiData;
      afficherPokemon();
      numberPokemon.innerHTML = "Pokemon N°" + data[indexPokemon].pokedex_id;
      numberGen.innerHTML = "Génération N°" + indexGeneration;
      previousPokemon.disabled = true;
      if (indexGeneration === indexGenMin) {
        previousGeneration.disabled = true;
      }
      if (indexGeneration === indexGenMax) {
        nextGeneration.disabled = true;
      }
    })
    .catch((err) => console.log(err));
}

function getGen() {
  const API = `https://tyradex.vercel.app/api/v1/gen`;
  fetch(API)
    .then((res) => res.json())
    .then((apiData) => {
      const nbGen = apiData.length - 1;
      if (nbGen > 0) {
        indexGenMin = apiData[0].generation;
        indexGenMax = apiData[nbGen].generation;
      }
    })
    .catch((err) => console.log(err));
}

function afficherPokemon() {
  const typePokemon = data[indexPokemon].types;
  const spellPokemon = data[indexPokemon].talents;

  numberPokemon.innerHTML = "Pokemon N°" + data[indexPokemon].pokedex_id;

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

function decrementIndexPokemonIfNotFirstPokemon() {
  if (indexPokemon > 0) {
    indexPokemon--;
  }
}

function incrementIndexPokemonIfNotLastPokemon() {
  if (indexPokemon < data.length - 1) {
    indexPokemon++;
  }
}

function decrementIndexPokemon() {
  decrementIndexPokemonIfNotFirstPokemon();
  if (indexPokemon > 0) {
    nextPokemon.disabled = false;
  } else {
    previousPokemon.disabled = true;
  }
}

function incrementIndexPokemon() {
  incrementIndexPokemonIfNotLastPokemon();
  if (indexPokemon < data.length - 1) {
    previousPokemon.disabled = false;
  } else {
    nextPokemon.disabled = true;
  }
}

function incrementIndexGen() {
  if (indexGeneration < indexGenMax) {
    indexGeneration++;
    previousGeneration.disabled = false;
  }
}

function decrementIndexGen() {
  if (indexGeneration > indexGenMin) {
    indexGeneration--;
    nextGeneration.disabled = false;
  }
}

function changeToPreviousPokemon() {
  decrementIndexPokemon();
  afficherPokemon();
}

function changeToNextPokemon() {
  incrementIndexPokemon();
  afficherPokemon();
}

function changeToPreviousGeneration() {
  decrementIndexGen();
  loadGeneration(indexGeneration);
}

function changeToNextGeneration() {
  incrementIndexGen();
  loadGeneration(indexGeneration);
}


window.addEventListener("load", () => {
  getGen();
  loadGeneration(indexGeneration);

  previousGeneration.addEventListener("click", changeToPreviousGeneration);
  nextGeneration.addEventListener("click", changeToNextGeneration);

  previousPokemon.addEventListener("click", changeToPreviousPokemon);
  nextPokemon.addEventListener("click", changeToNextPokemon);
});