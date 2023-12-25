const namePokemon = document.getElementById("namePokemon");
const imgPokemon = document.getElementById("imgPokemon");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

const API = `https://tyradex.vercel.app/api/v1/gen/1`;

let indexPokemon = 0;

function afficherPokemon() {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      namePokemon.innerHTML = data[indexPokemon].name.fr;
      imgPokemon.src = data[indexPokemon].sprites.regular;
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
