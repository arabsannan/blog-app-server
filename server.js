const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const Blog = require("./models/blog");
const resolvers = require("./resolvers/blog");
const typeDefs = require("./type_definitions/blog");
require("./config");
require("dotenv").config();

const app = express();

// Appollo Server
const apolloServer = async (typeDefs, resolvers) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    context: { Blog },
  });

  await server.start();
  server.applyMiddleware({ app });
  port = process.env.PORT;
  app.listen(port || 5000, () => {
    console.log("Listeninggg");

    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
};

apolloServer(typeDefs, resolvers);
