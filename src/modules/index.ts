import { resolver as userResolver } from "./users/resolver";
import { typeDef as userTypeDef } from "./users/typeDef";
import { resolver as teamResolver } from "./teams/resolver";
import { typeDef as teamTypeDef } from "./teams/typeDef";
import { mergeSchemas } from "graphql-tools";


export const mergedSchema = mergeSchemas({
    schemas: [userTypeDef, teamTypeDef],
    resolvers:[userResolver, teamResolver]
});