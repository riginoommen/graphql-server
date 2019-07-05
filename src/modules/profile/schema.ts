import { Document, Schema, Model, model } from "mongoose";
import { IUser } from "./interface";

export interface IUserModel extends IUser, Document { }
export interface IUserModelStatic extends Model<IUserModel> { }

export const UserSchema: Schema = new Schema({
    name: String,
    age: Number,
    place: String,
    email: String,
    hobbies: String
});

export const User: Model<IUserModel> = model<IUserModel, IUserModelStatic>("User", UserSchema);