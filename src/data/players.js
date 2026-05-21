const players = [
  // Goalkeeper
  {
    id: 1,
    name: "Thibaut Courtois",
    position: "Goalkeeper",
    number: 1,
    country: "Belgia",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Courtois_2018_%28cropped%29.jpg",
  },
  {
    id: 2,
    name: "Andriy Lunin",
    position: "Goalkeeper",
    number: 13,
    country: "Ukraina",
    image: "https://dynamo.kiev.ua/media/posts/2023/11/09/lunin41.jpg",
  },

  // Defender
  {
    id: 3,
    name: "Dani Carvajal",
    position: "Defender",
    number: 2,
    country: "Spanyol",
    image: "https://cdn-jpr.jawapos.com/images/20/2026/05/20/pemain-real-madrid-dani-carvajal-instagramdanicarvajal2-d5mvK.webp",
  },
  {
    id: 4,
    name: "Eder Militao",
    position: "Defender",
    number: 3,
    country: "Brasil",
    image: "https://assets.laliga.com/squad/2024/t186/p220570/2048x2225/p220570_t186_2024_1_001_000.png",
  },
  {
    id: 5,
    name: "David Alaba",
    position: "Defender",
    number: 4,
    country: "Austria",
    image: "https://assets.laliga.com/squad/2024/t186/p59663/2048x2225/p59663_t186_2024_1_001_000.png",
  },
  {
    id: 6,
    name: "Antonio Rudiger",
    position: "Defender",
    number: 22,
    country: "Jerman",
    image: "https://assets.laliga.com/squad/2024/t186/p190718/2048x2225/p190718_t186_2024_1_001_000.png",
  },
  {
    id: 7,
    name: "Ferland Mendy",
    position: "Defender",
    number: 23,
    country: "Prancis",
    image: "https://assets.laliga.com/squad/2024/t186/p161241/2048x2225/p161241_t186_2024_1_001_000.png",
  },

  // Midfielder
  {
    id: 8,
    name: "Jude Bellingham",
    position: "Midfielder",
    number: 5,
    country: "Inggris",
    image: "https://assets.laliga.com/squad/2024/t186/p520554/2048x2225/p520554_t186_2024_1_001_000.png",
  },
  {
    id: 9,
    name: "Eduardo Camavinga",
    position: "Midfielder",
    number: 6,
    country: "Prancis",
    image: "https://assets.laliga.com/squad/2024/t186/p474184/2048x2225/p474184_t186_2024_1_001_000.png",
  },
  {
    id: 10,
    name: "Federico Valverde",
    position: "Midfielder",
    number: 8,
    country: "Uruguay",
    image: "https://assets.laliga.com/squad/2024/t186/p223255/2048x2225/p223255_t186_2024_1_001_000.png",
  },
  {
    id: 11,
    name: "Aurelien Tchouameni",
    position: "Midfielder",
    number: 14,
    country: "Prancis",
    image: "https://assets.laliga.com/squad/2024/t186/p490541/2048x2225/p490541_t186_2024_1_001_000.png",
  },
  {
    id: 12,
    name: "Arda Guler",
    position: "Midfielder",
    number: 15,
    country: "Turki",
    image: "https://assets.laliga.com/squad/2024/t186/p550287/2048x2225/p550287_t186_2024_1_001_000.png",
  },

  // Forward
  {
    id: 13,
    name: "Vinicius Junior",
    position: "Forward",
    number: 7,
    country: "Brasil",
    image: "https://assets.laliga.com/squad/2024/t186/p246333/2048x2225/p246333_t186_2024_1_001_000.png",
  },
  {
    id: 14,
    name: "Kylian Mbappe",
    position: "Forward",
    number: 9,
    country: "Prancis",
    image: "https://assets.laliga.com/squad/2024/t186/p219881/2048x2225/p219881_t186_2024_1_001_000.png",
  },
  {
    id: 15,
    name: "Rodrygo",
    position: "Forward",
    number: 11,
    country: "Brasil",
    image: "https://assets.laliga.com/squad/2024/t186/p412283/2048x2225/p412283_t186_2024_1_001_000.png",
  },
  {
    id: 16,
    name: "Brahim Diaz",
    position: "Forward",
    number: 21,
    country: "Maroko",
    image: "https://assets.laliga.com/squad/2024/t186/p241641/2048x2225/p241641_t186_2024_1_001_000.png",
  },

  // Coach
  {
    id: 17,
    name: "Carlo Ancelotti",
    position: "Coach",
    number: "-",
    country: "Italia",
    image: "https://img.a.transfermarkt.technology/portrait/big/523.png",
  },
];

export default players;
