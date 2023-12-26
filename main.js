const container = document.getElementById("container");
const namePokemon = document.getElementById("namePokemon");
const typePokemon = document.getElementById("typePokemon");
const imgPokemon = document.getElementById("imgPokemon");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const typeContainer = document.getElementById("typeContainer");

const API = `https://tyradex.vercel.app/api/v1/gen/1`;

let indexPokemon = 0;

function afficherPokemon() {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      namePokemon.innerHTML = data[indexPokemon].name.fr;
      imgPokemon.src = data[indexPokemon].sprites.regular;

      const typePokemon = data[indexPokemon].types;

      const resetTypeImages = document.querySelectorAll(".imgType");
      resetTypeImages.forEach((image) => {
        image.remove();
      });

      for (let i = 0; i < typePokemon.length; i++) {
        const imgType = document.createElement("img");

        imgType.classList.add("imgType");
        imgType.src = typePokemon[i].image;

        typeContainer.appendChild(imgType);
      }
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
