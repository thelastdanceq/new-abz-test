import { createContext } from "react";
import { IUser } from "../components/Logic/UserLayout/types";
type UserContext = {
    users: IUser[],
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
}
export const UsersContext = createContext({} as UserContext)