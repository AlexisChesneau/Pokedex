import { TypeBackground } from "./typeBackground.js";

const namePokemon = document.getElementById("namePokemon");
const imgPokemon = document.getElementById("imgPokemon");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const typeContainerTypes = document.getElementById("typeContainerTypes");
const typeContainerSpells = document.getElementById("typeContainerSpells");

const API = `https://tyradex.vercel.app/api/v1/gen/1`;

let indexPokemon = 0;

function afficherPokemon() {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      const typePokemon = data[indexPokemon].types;
      const spellPokemon = data[indexPokemon].talents;

      const resetElement = document.querySelectorAll(".imgType, .spellName");
      resetElement.forEach((element) => {
        element.remove();
      });

      namePokemon.innerHTML = data[indexPokemon].name.fr;
      imgPokemon.src = data[indexPokemon].sprites.regular;

      for (let i = 0; i < typePokemon.length; i++) {
        const imgType = document.createElement("img");

        imgType.classList.add("imgType");
        imgType.src = typePokemon[i].image;

        typeContainerTypes.appendChild(imgType);
      }

      for (let y = 0; y < spellPokemon.length; y++) {
        const spellName = document.createElement("p");

        spellName.classList.add("spellName");
        spellName.innerHTML = spellPokemon[y].name;

        typeContainerSpells.appendChild(spellName);
      }

      TypeBackground(typePokemon);
    })
    .catch((err) => console.log(err));
}

function PreviousPokemon() {
  afficherPokemon(indexPokemon--);
}

function NextPokemon() {
  afficherPokemon(indexPokemon++);
}

previousButton.addEventListener("click", PreviousPokemon);
nextButton.addEventListener("click", NextPokemon);

afficherPokemon();
