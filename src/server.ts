import express = require("express");
import * as http from 'http'
import { ApolloServer, gql } from "apollo-server-express";
import { connect } from "mongoose";

import { resolver as resolvers} from "./modules/profile/resolver";
import { typeDef as typeDefs } from "./modules/profile/typeDef";
const path = require("path");

// import { resolver as userResolver } from "./modules/users/resolver";
// import { typeDef as userTypeDef } from "./modules/users/typeDef";

const app = express();

app.get("/", (req ,res)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
});


connect(`mongodb+srv://graphqluser:graphqlpwd@mongo-rhzev.mongodb.net/graphql?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(() => console.log(`Established the Database connection`))

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: true
});

server.applyMiddleware({ app: app });
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
const port = process.env.PORT || 5000;
httpServer.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`)
})