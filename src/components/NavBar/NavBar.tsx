import { Box,  Toolbar, Button } from "@mui/material"
//@ts-ignore
import logo from "../../assets/images/Logo.svg"
import { MUIContainer } from "../Container/MUIContainer"

export const NavBar = () => {
	return (
		<MUIContainer >
			<Toolbar
				sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}
			>
				<img src={logo} alt='logo' />
				<Box>
					<Button
						variant='contained'
						sx={{  marginRight: "10px" }}
					>
						Users
					</Button>
					<Button
						variant='contained'
					>
						Login
					</Button>
				</Box>
			</Toolbar>
		</MUIContainer>
	)
}
