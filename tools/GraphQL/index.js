const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");
// instantiate instace of ApolloServer class
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
   console.log("your API is running", url);
});
