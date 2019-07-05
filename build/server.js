"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = __importStar(require("http"));
var apollo_server_express_1 = require("apollo-server-express");
var mongoose_1 = require("mongoose");
var resolver_1 = require("./modules/profile/resolver");
var typeDef_1 = require("./modules/profile/typeDef");
// import { resolver as userResolver } from "./modules/users/resolver";
// import { typeDef as userTypeDef } from "./modules/users/typeDef";
var app = express();
app.get("/", function (req, res) {
    res.send("Welcome to GraphQL Server");
});
var httpPort = 5000;
mongoose_1.connect("mongodb://localhost:27017/graphql-db", { useNewUrlParser: true }).then(function () { return console.log("Established the Database connection"); });
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDef_1.typeDef,
    resolvers: resolver_1.resolver
});
server.applyMiddleware({ app: app });
var httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen(httpPort, function () {
    console.log("\uD83D\uDE80 Server ready at http://localhost:" + httpPort + server.graphqlPath);
    console.log("\uD83D\uDE80 Subscriptions ready at ws://localhost:" + httpPort + server.subscriptionsPath);
});
