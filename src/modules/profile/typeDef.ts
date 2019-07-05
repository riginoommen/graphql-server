import { gql } from "apollo-server-express";

export const typeDef = gql`
type UserType {
    name: String
    age: Int
    place: String
    email: String
    hobbies: String
}

input UserInput {
    name: String
    age: Int
    place: String
    email: String
    hobbies: String
}

type Query {
    # List Users
    listUsers: [UserType]
    # Fetch a User with uid
    getUser(uid: String): UserType
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