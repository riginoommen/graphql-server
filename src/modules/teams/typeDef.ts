
export const typeDef = `
type ManagerType {
    name: String
    email: String
}

type TeamType {
    _id: String
    name: String
    url: String
    mailingList: String
    manager: ManagerType
}

input ManagerInput {
    name: String
    email: String
}

input TeamInput {
    _id: String
    name: String
    url: String
    mailingList: String
    manager: ManagerInput
}

type Query {
    # List Teams
    listTeams: [TeamType]
    # Fetch a Team with name
    getTeam(name: String): TeamType
}

type Mutation {
    # Add a new Team
    addTeam(input: TeamInput): TeamType
    # Delete Team
    deleteTeam(_id: String!): TeamType
    # Update Team
    updateTeam(input: TeamInput): TeamType
}
`;