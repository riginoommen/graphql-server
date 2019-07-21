import { Document, Schema, Model, model } from "mongoose";
import { ITeam } from "./interface";

export interface ITeamModel extends ITeam, Document { }
export interface ITeamModelStatic extends Model<ITeamModel> { }

export const TeamSchema: Schema = new Schema({
    name: String,
    url: String,
    mailingList: String,
    manager: {
        name: String,
        email: String,
    }
});

export const Team: Model<ITeamModel> = model<ITeamModel, ITeamModelStatic>("Team", TeamSchema);