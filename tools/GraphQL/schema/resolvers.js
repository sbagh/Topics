const { UserList } = require("../FakeData");
// const _ = require("lodash");

const resolvers = {
   Query: {
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
   },
};

module.exports = {
   resolvers,
};
