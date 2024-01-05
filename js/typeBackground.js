const imgPokemonContainer = document.querySelector(".imgPokemonContainer");
const card = document.querySelector(".card");

export function TypeBackground(typePokemon) {
  const typePokemonInfoBackground = [
    {
      type: "Plante",
      backgroundColor: "#6B8E23",
      imageUrl: "./images/byType/plante.png",
    },
    {
      type: "Feu",
      backgroundColor: "#B22222",
      imageUrl: "./images/byType/feu.jpg",
    },
    {
      type: "Eau",
      backgroundColor: "#4169E1",
      imageUrl: "./images/byType/eau.png",
    },
    {
      type: "Électrik",
      backgroundColor: "#CCCC00",
      imageUrl: "./images/byType/électric.png",
    },
    {
      type: "Glace",
      backgroundColor: "#87CEEB",
      imageUrl: "./images/byType/glace.png",
    },
    {
      type: "Combat",
      backgroundColor: "#8B4513",
      imageUrl: "./images/byType/combat.jpg",
    },
    {
      type: "Poison",
      backgroundColor: "#800080",
      imageUrl: "./images/byType/poison.jpg",
    },
    {
      type: "Sol",
      backgroundColor: "#CD853F",
      imageUrl: "./images/byType/sol.jpg",
    },
    {
      type: "Vol",
      backgroundColor: "#87CEFA",
      imageUrl: "./images/byType/vol.jpeg",
    },
    {
      type: "Psy",
      backgroundColor: "#9370DB",
      imageUrl: "./images/byType/psy.jpg",
    },
    {
      type: "Insecte",
      backgroundColor: "#6B8E23",
      imageUrl: "./images/byType/insecte.jpg",
    },
    {
      type: "Roche",
      backgroundColor: "#A9A9A9",
      imageUrl: "./images/byType/roche.png",
    },
    {
      type: "Dragon",
      backgroundColor: "#C0C0C0",
      imageUrl: "./images/byType/vol.jpeg",
    },
    {
      type: "Spectre",
      backgroundColor: "#483D8B",
      imageUrl: "./images/byType/spectre.jpg",
    },
    {
      type: "Acier",
      backgroundColor: "#696969",
      imageUrl: "./images/byType/vol.jpeg",
    },
    {
      type: "Fée",
      backgroundColor: "#FFB6C1",
      imageUrl: "./images/byType/fée.png",
    },
    {
      type: "Normal",
      backgroundColor: "#A9A9A9",
      imageUrl: "./images/byType/normal.jpg",
    },
  ];

  for (let i = 0; i < typePokemonInfoBackground.length; i++) {
    if (typePokemon[0].name === typePokemonInfoBackground[i].type) {
      card.style.backgroundColor = typePokemonInfoBackground[i].backgroundColor;
      imgPokemonContainer.style.backgroundImage = `url("${typePokemonInfoBackground[i].imageUrl}")`;
      break;
    }
  }
}
