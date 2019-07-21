import { User } from "./schema";

export const resolver = {
  Query: {
    getUser(root: any, args: any, ctx: any) {
      return User.findOne({ name: args.name })
        .then(data => data)
        .catch(err => err);
    },
    listUsers() {
      return User.find()
        .then(data => data)
        .catch(err => err);
    },
  },
  Mutation: {
    addUser(root: any, args: any, ctx: any) {
      const data = new User(args.input);
      return data.save()
        .then(response => response)
        .catch(err => err);
    },
    deleteUser(root: any, args: any, ctx: any) {
      return User.findByIdAndRemove(args._id)
        .then(response => response)
        .catch(err => err);
    },
    updateUser(root: any, args: any, ctx: any) {
      return User.findById(args.input._id)
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
