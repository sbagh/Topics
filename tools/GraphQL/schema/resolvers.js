const { UserList, MovieList } = require("../FakeData");
// const _ = require("lodash");

const resolvers = {
   Query: {
      // User Resolvers
      users: () => {
         return UserList;
      },

      user: (parent, args) => {
         // since its id type, its being passed as a string
         const id = parseInt(args.id);
         //  const user = _.find(UserList, { id });
         const user = UserList.find((user) => user.id === id);
         return user;
      },

      //Movie Resolvers
      movies: () => {
         return MovieList;
      },

      movie: (parent, args) => {
         const title = args.title;
         const movie = MovieList.find((movie) => movie.title === title);
         return movie;
      },
   },
   User: {
      favoriteMovies: () => {
         const movie = MovieList.filter((movie) => movie.year > 2000);
         return movie;
      },
   },
};

module.exports = {
   resolvers,
};
