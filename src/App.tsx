import { Box } from "@mui/material"
import React, { useState } from "react"
import { Main } from "./components/Logic/Main/Main"
import { NavBar } from "./components/Logic/NavBar/NavBar"
import { PostBlock } from "./components/Logic/PostBlock/PostBlock"
import { IUser } from "./components/Logic/UserLayout/types"
import { UserLayout } from "./components/Logic/UserLayout/UserLayout"
import { UsersContext } from "./contexts/users"

function App() {
	const [users, setUsers] = useState<IUser[]>([])

	return (
		<div className='App'>
			{
				<UsersContext.Provider value={{ users, setUsers }}>
					<Box sx={{ backgroundColor: "#F8F8F8" }}>
						<NavBar />
						<Main />
						<UserLayout />
						<PostBlock />
					</Box>
				</UsersContext.Provider>
			}
		</div>
	)
}

export default App
