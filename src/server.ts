import express = require("express");
import * as http from 'http'
import { ApolloServer, gql } from "apollo-server-express";
import { connect } from "mongoose";

import { resolver as resolvers} from "./modules/profile/resolver";
import { typeDef as typeDefs } from "./modules/profile/typeDef";

// import { resolver as userResolver } from "./modules/users/resolver";
// import { typeDef as userTypeDef } from "./modules/users/typeDef";

const app = express();

app.get("/", (req ,res)=> {
    res.send(`Welcome to GraphQL Server`)
});

const httpPort: Number = 5000

connect(`mongodb://ds247637.mlab.com:47637/heroku_qbwf7dtm/user-profile`, { useNewUrlParser: true }).then(() => console.log(`Established the Database connection`))

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

server.applyMiddleware({ app: app });
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(httpPort, () => {
  console.log(`🚀 Server ready at http://localhost:${httpPort}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${httpPort}${server.subscriptionsPath}`)
})