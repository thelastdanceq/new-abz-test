import { Avatar, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import React from "react"
import { IUser } from "../types"

const UserCard: React.FC<IUser> = ({
	id,
	email,
	name,
	phone,
	photo,
	position,
	registration_timestamp,
	position_id,
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				textAlign: "center",
				padding: "20px",
				backgroundColor: "white",
			}}
		>
			<Avatar sx={{ width: "70px", height: "70px" }} src={photo} />
			<Typography sx={{ marginTop: "20px" }}>{name}</Typography>
			<Box sx={{ marginTop: "20px" }}>
				<Typography>{position}</Typography>
				<Typography>{email}</Typography>
				<Typography>{phone}</Typography>
			</Box>
		</Box>
	)
}

export default UserCard
