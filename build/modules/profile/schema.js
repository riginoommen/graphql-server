"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    place: String,
    email: String,
    hobbies: String
});
exports.User = mongoose_1.model("User", exports.UserSchema);
