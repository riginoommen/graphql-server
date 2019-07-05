"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDef = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ntype UserType {\n    name: String\n    age: Int\n    place: String\n    email: String\n    hobbies: String\n}\n\ninput UserInput {\n    name: String\n    age: Int\n    place: String\n    email: String\n    hobbies: String\n}\n\ntype Query {\n    # List Users\n    listUsers: [UserType]\n    # Fetch a User with uid\n    getUser(uid: String): UserType\n}\n\ntype Mutation {\n    # Add a new User\n    addUser(input: UserInput): UserType\n    # Delete User\n    deleteUser(_id: String!): UserType\n    # Update User\n    updateUser(input: UserInput): UserType\n}\n"], ["\ntype UserType {\n    name: String\n    age: Int\n    place: String\n    email: String\n    hobbies: String\n}\n\ninput UserInput {\n    name: String\n    age: Int\n    place: String\n    email: String\n    hobbies: String\n}\n\ntype Query {\n    # List Users\n    listUsers: [UserType]\n    # Fetch a User with uid\n    getUser(uid: String): UserType\n}\n\ntype Mutation {\n    # Add a new User\n    addUser(input: UserInput): UserType\n    # Delete User\n    deleteUser(_id: String!): UserType\n    # Update User\n    updateUser(input: UserInput): UserType\n}\n"])));
var templateObject_1;
