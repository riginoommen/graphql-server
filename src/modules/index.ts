// import { resolver as teamResolver} from "./team/resolver";
// import { typeDef as teamTypeDef } from "./team/typeDef";

import { resolver as userResolver } from "./profile/resolver";
import { typeDef as userTypeDef } from "./profile/typeDef";
import { makeExecutableSchema } from "apollo-server-express";

import { find, filter, merge } from "lodash";

