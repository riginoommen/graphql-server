import { Team } from "./schema";

export const resolver = {
    Query: {
      getTeam(root: any, args: any, ctx: any) {
        return Team.findOne({ name: args.name })
          .then(data => data)
          .catch(err => err);
      },
      listTeams() {
        return Team.find()
          .then(data => data)
          .catch(err => err);
      },
    },
    Mutation: {
      addTeam(root: any, args: any, ctx: any) {
        const data = new Team(args.input);
        return data.save()
          .then(response => response)
          .catch(err => err);
      },
      deleteTeam(root: any, args: any, ctx: any) {
        return Team.findByIdAndRemove(args._id)
          .then(response => response)
          .catch(err => err);
      },
      updateTeam(root: any, args: any, ctx: any) {
        return Team.findById(args.input._id)
          .then(response => {
            return Object.assign(response, args.input)
              .save()
              .then((user: any) => {
                return user;
              });
          })
          .catch((err: any) => err);
      }
    }
  };