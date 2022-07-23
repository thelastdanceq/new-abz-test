import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { MUIContainer } from "../Container/MUIContainer"
//@ts-ignore
import bi from "../../assets/images/pexels-alexandr-podvalny-1227513.jpeg"

export const Main = () => {
	return (
		<Box
			sx={{
				background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bi})`,
				backgroundSize: "100% 100%",
			}}
		>
			<MUIContainer>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						textAlign: "center",
						color: "white",
					}}
				>
					<Typography
						sx={{
							marginTop: "40px",
							fontStyle: "normal",
							fontWeight: 400,
							fontSize: "40px",
							lineHeight: "40px",
						}}
					>
						Test assignment for front-end developer
					</Typography>
					<Typography
						sx={{
							marginTop: "21px",
							fontStyle: "normal",
							fontWeight: 400,
							fontSize: "16px",
							lineHeight: "26px",
						}}
					>
						What defines a good front-end developer is one that has skilled
						knowledge of HTML, CSS, JS with a vast understanding of User design
						thinking as they'll be building web interfaces with accessibility in
						mind. They should also be excited to learn, as the world of
						Front-End Development keeps evolving.
					</Typography>
					<Button
						variant='contained'
						sx={{
							marginTop: "32px",
							marginBottom: "71px",
						}}
					>
						SIGN UP
					</Button>
				</Box>
			</MUIContainer>
		</Box>
	)
}
