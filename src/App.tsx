import { Box } from "@mui/material"
import React from "react"
import { Main } from "./components/Main/Main"
import { NavBar } from "./components/NavBar/NavBar"
import { UserLayout } from "./components/UserLayout/UserLayout"

function App() {
	return (
		<div className='App'>
			<Box sx={{ backgroundColor: "#F8F8F8" }}>
				<NavBar />
				<Main />
				<UserLayout />
			</Box>
		</div>
	)
}

export default App
