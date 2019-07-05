"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = require("./schema");
exports.resolver = {
    Query: {
        getUser: function (root, args, ctx) {
            return schema_1.User.findOne({ kerberosID: args.uid })
                .then(function (data) { return data; })
                .catch(function (err) { return err; });
        },
        listUsers: function () {
            return schema_1.User.find()
                .then(function (data) { return data; })
                .catch(function (err) { return err; });
        },
    },
    Mutation: {
        addUser: function (root, args, ctx) {
            var data = new schema_1.User(args.input);
            return data.save()
                .then(function (response) { return response; })
                .catch(function (err) { return err; });
        },
        deleteUser: function (root, args, ctx) {
            return schema_1.User.findByIdAndRemove(args._id)
                .then(function (response) { return response; })
                .catch(function (err) { return err; });
        },
        updateUser: function (root, args, ctx) {
            return schema_1.User.findById(args.input._id)
                .then(function (response) {
                return Object.assign(response, args.input)
                    .save()
                    .then(function (user) {
                    return user;
                });
            })
                .catch(function (err) { return err; });
        }
    }
};
