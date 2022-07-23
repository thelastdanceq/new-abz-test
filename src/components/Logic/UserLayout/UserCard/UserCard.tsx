import { Avatar, Tooltip, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import React from "react"
import { IUser } from "../types"
import { limitString30, maskThePhone } from "./helpers"

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
			<Tooltip title={name}>
				<Typography sx={{ marginTop: "20px" }}>
					{limitString30(name)}
				</Typography>
			</Tooltip>
			<Box sx={{ marginTop: "20px" }}>
				<Tooltip title={position}>
					<Typography>{limitString30(position)}</Typography>
				</Tooltip>
				<Tooltip title={email}>
					<Typography>{limitString30(email)}</Typography>
				</Tooltip>
				<Tooltip title={phone}>
					<Typography>{maskThePhone(phone)}</Typography>
				</Tooltip>
			</Box>
		</Box>
	)
}

export default UserCard
