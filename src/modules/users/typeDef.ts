import { makeExecutableSchema } from "graphql-tools";

export const typeDef = `
type UserType {
    _id: String
    name: String
    age: Int
    place: String
    email: String
    hobbies: String
}

input UserInput {
    _id: String
    name: String
    age: Int
    place: String
    email: String
    hobbies: String
}

type Query {
    # List Users
    listUsers: [UserType]
    # Fetch a User with name
    getUser(name: String): UserType
}

type Mutation {
    # Add a new User
    addUser(input: UserInput): UserType
    # Delete User
    deleteUser(_id: String!): UserType
    # Update User
    updateUser(input: UserInput): UserType
}
`;

