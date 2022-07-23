import { Box, Toolbar, Button } from "@mui/material"
import AnchorLink from "react-anchor-link-smooth-scroll"

//@ts-ignore
import logo from "../../../assets/images/Logo.svg"
import { MUIContainer } from "../../UI/Container/MUIContainer"

export const NavBar = () => {
	return (
		<MUIContainer>
			<Toolbar
				sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}
			>
				<img src={logo} alt='logo' />
				<Box>
					<AnchorLink href='#users'>
						<Button variant='contained' sx={{ marginRight: "10px" }}>
							Users
						</Button>
					</AnchorLink>
					<AnchorLink href='#form'>
						<Button variant='contained'>Login</Button>
					</AnchorLink>
				</Box>
			</Toolbar>
		</MUIContainer>
	)
}
