import express = require("express");
import { connect } from "mongoose";
const path = require("path");

import { GraphQLServer, Options } from "graphql-yoga";
import { mergedSchema } from "./modules";
const app = express();

app.get("/", (req ,res)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
});

connect(`mongodb+srv://graphqluser:graphqlpwd@mongo-rhzev.mongodb.net/graphql?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(() => console.log(`Established the Database connection`));

const options: Options = {
  port: process.env.port || 8000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
  tracing: true,
}

const server = new GraphQLServer({ schema: mergedSchema })
server.start(options, () => console.log('Server is running'));