import { createContext } from "react";
import { IUser } from "../components/Logic/UserLayout/types";
type UserContext = {
    users: IUser[],
}
type UserDispatchContext = {
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
}
export const UsersStateContext = createContext({} as UserContext)
export const UsersDispatchContext = createContext({} as UserDispatchContext)