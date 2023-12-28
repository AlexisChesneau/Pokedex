const imgPokemonContainer = document.querySelector(".imgPokemonContainer");
const card = document.querySelector(".card");

export function TypeBackground(typePokemon) {
  const typePokemonInfoBackground = [
    {
      type: "Plante",
      backgroundColor: "#6B8E23",
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6e702b25555595.563472c896667.jpg",
    },
    {
      type: "Feu",
      backgroundColor: "#B22222",
      imageUrl:
        "https://i.pinimg.com/736x/16/b0/90/16b090b9b59d74aadce298b8fe235d25.jpg",
    },
    {
      type: "Eau",
      backgroundColor: "#4169E1",
      imageUrl: "https://wallpaperaccess.com/full/2714119.png",
    },
    {
      type: "Électrik",
      backgroundColor: "#CCCC00",
      imageUrl:
        "https://i.pinimg.com/originals/7d/32/4b/7d324b7dd6c038a68074f77bc9006cbc.png",
    },
    {
      type: "Glace",
      backgroundColor: "#87CEEB",
      imageUrl:
        "https://pics.craiyon.com/2023-06-17/a9c83c1d6c7b4701aa2cc462f8b8534e.webp",
    },
    {
      type: "Combat",
      backgroundColor: "#8B4513",
      imageUrl:
        "https://brazilianjiujitsustateofmind.files.wordpress.com/2012/02/dojo.jpg",
    },
    {
      type: "Poison",
      backgroundColor: "#800080",
      imageUrl:
        "https://cache.desktopnexus.com/thumbseg/524/524716-bigthumbnail.jpg",
    },
    {
      type: "Sol",
      backgroundColor: "#CD853F",
      imageUrl:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c08d530-29ab-442b-9b52-6ed6969f2bd7/d8i3udq-c83b045c-859b-4ef9-9023-cef58008b879.png/v1/fill/w_1024,h_576,q_80,strp/pokemon_landscape_by_brainblower_d8i3udq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvMmMwOGQ1MzAtMjlhYi00NDJiLTliNTItNmVkNjk2OWYyYmQ3XC9kOGkzdWRxLWM4M2IwNDVjLTg1OWItNGVmOS05MDIzLWNlZjU4MDA4Yjg3OS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Stt6KzljYUqBWRuwXLsbeiJZsxuGoAcZYXSgaFl2iQU",
    },
    {
      type: "Vol",
      backgroundColor: "#87CEFA",
      imageUrl:
        "https://trustmyscience.com/wp-content/uploads/2018/09/couleur-ciel.jpeg",
    },
    {
      type: "Psy",
      backgroundColor: "#9370DB",
      imageUrl:
        "https://static1.millenium.org/articles/8/31/60/38/@/755121-pokemon-anime-serie-spookyalola-sm-094-article_m-2.jpg",
    },
    {
      type: "Insecte",
      backgroundColor: "#6B8E23",
      imageUrl:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80ff523f-ff84-457d-a547-464588d3a3d3/dfvp0rj-187fda5b-ec93-4539-bb8c-471981888b7f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwZmY1MjNmLWZmODQtNDU3ZC1hNTQ3LTQ2NDU4OGQzYTNkM1wvZGZ2cDByai0xODdmZGE1Yi1lYzkzLTQ1MzktYmI4Yy00NzE5ODE4ODhiN2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ic8XQXk_jsJw9n_lM13YhCupsATS8YELhhx3qz9LyEM",
    },
    {
      type: "Roche",
      backgroundColor: "#A9A9A9",
      imageUrl:
        "https://img.freepik.com/premium-photo/2d-alien-planet-background-environment-battle-arena-mobile-game-generative-ai_742252-13367.jpg?size=626&ext=jpg&ga=GA1.1.853910500.1703645532&semt=ais",
    },
    {
      type: "Dragon",
      backgroundColor: "#C0C0C0",
      imageUrl:
        "https://trustmyscience.com/wp-content/uploads/2018/09/couleur-ciel.jpeg",
    },
    {
      type: "Spectre",
      backgroundColor: "#483D8B",
      imageUrl:
        "https://wallpaper-house.com/data/out/5/wallpaper2you_71206.jpg",
    },
    {
      type: "Acier",
      backgroundColor: "#696969",
      imageUrl:
        "https://trustmyscience.com/wp-content/uploads/2018/09/couleur-ciel.jpeg",
    },
    {
      type: "Fée",
      backgroundColor: "#FFB6C1",
      imageUrl:
        "https://pics.craiyon.com/2023-07-01/7d21a857ecb846afb951e4a8ba4bcdff.webp",
    },
    {
      type: "Normal",
      backgroundColor: "#A9A9A9",
      imageUrl:
        "https://i.pinimg.com/736x/f6/a1/8a/f6a18ac56651ce4f9ca7e0230706a0b6.jpg",
    },
  ];
  for (let i = 0; i < typePokemonInfoBackground.length; i++) {
    if (typePokemon[0].name === typePokemonInfoBackground[i].type) {
      card.style.backgroundColor = typePokemonInfoBackground[i].backgroundColor;
      imgPokemonContainer.style.backgroundImage = `url("${typePokemonInfoBackground[i].imageUrl}")`;
    }
  }
}
