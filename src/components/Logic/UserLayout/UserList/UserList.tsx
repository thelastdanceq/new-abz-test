import { Grid, useMediaQuery } from "@mui/material"
import React from "react"
import { IUser } from "../types"
import UserCard from "../UserCard/UserCard"

interface IProps {
	list: IUser[]
}

const getGridData = (tablet: boolean, pc: boolean) => {
	if (pc) return "repeat(3, 1fr)"
	if (tablet) return "repeat(2, 1fr)"
	return "1fr"
}
const getGridGap = (tablet: boolean, pc: boolean) => {
	if (pc) return "29px"
	if (tablet) return "16px"
	return "20px"
}
export const UserList: React.FC<IProps> = ({ list }) => {
	const middle = useMediaQuery("(min-width:1024px)")
	const small = useMediaQuery("(min-width:768px)")
	return (
		<Grid
			display={"grid"}
			gap={getGridGap(small, middle)}
			gridTemplateColumns={getGridData(small, middle)}
		>
			{list.map((user) => (
				<UserCard key={user.id} {...user} />
			))}
		</Grid>
	)
}
