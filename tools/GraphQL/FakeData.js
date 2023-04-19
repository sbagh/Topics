const UserList = [
   {
      id: 1,
      name: "Kissiah",
      username: "Barlas",
      age: 62,
      nationality: "France",
      friends: [
         {
            id: 2,
            name: "Bethanne",
            username: "Woodward",
            age: 55,
            nationality: "Cuba",
         },
         {
            id: 6,
            name: "Saundra",
            username: "Linneman",
            age: 46,
            nationality: "Afghanistan",
         },
      ],
   },
   {
      id: 2,
      name: "Bethanne",
      username: "Woodward",
      age: 55,
      nationality: "Cuba",
      friends: [
         {
            id: 1,
            name: "Kissiah",
            username: "Barlas",
            age: 62,
            nationality: "France",
         },
      ],
   },
   {
      id: 5,
      name: "Cecilla",
      username: "Castell",
      age: 28,
      nationality: "France",
   },
   {
      id: 6,
      name: "Saundra",
      username: "Linneman",
      age: 46,
      nationality: "Afghanistan",
      friends: [
         {
            id: 5,
            name: "Cecilla",
            username: "Castell",
            age: 28,
            nationality: "France",
         },
      ],
   },

   {
      id: 8,
      name: "Howard",
      username: "Critchard",
      age: 27,
      nationality: "Russia",
   },
   {
      id: 10,
      name: "Phillida",
      username: "Greensitt",
      age: 80,
      nationality: "Greece",
   },
   {
      id: 13,
      name: "Izzy",
      username: "Towner",
      age: 38,
      nationality: "Brazil",
   },
   {
      id: 14,
      name: "Nissa",
      username: "Oldam",
      age: 88,
      nationality: "France",
   },
];

const MovieList = [
   {
      id: 1,
      title: "Drum",
      genre: "Thriller",
      year: 2007,
      inTheatres: false,
   },
   {
      id: 2,
      title: "Unbreakable",
      genre: "Drama|Sci-Fi",
      year: 2003,
      inTheatres: true,
   },
   {
      id: 3,
      title: "Flying Saucer, The",
      genre: "Sci-Fi",
      year: 1999,
      inTheatres: false,
   },
   {
      id: 4,
      title: "Gates of Heaven",
      genre: "Documentary",
      year: 1967,
      inTheatres: true,
   },
   {
      id: 5,
      title: "Possessed",
      genre: "Drama|Horror",
      year: 2010,
      inTheatres: true,
   },
];

module.exports = { UserList, MovieList };
