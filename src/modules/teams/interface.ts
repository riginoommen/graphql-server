import { IUser } from "../users/interface";

export interface ITeam {
    name: string;
    url: string;
    mailingList: string;
    manager: IUser;
}
