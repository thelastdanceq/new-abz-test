import { Grid } from "@mui/material"
import React from "react"
import { IUser } from "../types"
import UserCard from "../UserCard/UserCard"

interface IProps {
	list: IUser[]
}

export const UserList: React.FC<IProps> = ({ list }) => {
	return (
		<Grid
			display={"grid"}
			gap={"20px "}
			gridTemplateColumns={"repeat(auto-fill,minmax(328px, 1fr))"}
		>
			{list.map((user) => (
				<UserCard key={user.id} {...user} />
			))}
		</Grid>
	)
}
