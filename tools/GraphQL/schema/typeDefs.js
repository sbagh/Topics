const { gql } = require("apollo-server");

const typeDefs = gql`
   type User {
      id: ID!
      name: String!
      username: String!
      age: Int!
      nationality: String!
      friends: [User]
      favoriteMovies: [Movie]
   }

   type Movie {
      id: ID!
      title: String!
      genre: String!
      year: Int!
      inTheatres: Boolean!
   }

   type Query {
      users: [User!]!
      user(id: ID!): User!
      movies: [Movie!]!
      movie(title: String!): Movie!
   }

   input CreateUserInput {
      name: String!
      username: String!
      age: Int!
      nationality: String!
      friends: [User]
      favoriteMovies: [Movie]
   }

   type Mutation {
      createUser(user: CreateUserInput!): User!
   }

   enum Nationality {
      France
      Cuba
      Afghanistan
      Russia
      Greece
      Brazil
   }
`;

module.exports = {
   typeDefs,
};
