import { Box } from "@mui/material"
import React, { Suspense, useState } from "react"
import { Main } from "./components/Logic/Main/Main"
import { NavBar } from "./components/Logic/NavBar/NavBar"
import { PostBlock } from "./components/Logic/PostBlock/PostBlock"
import { IUser } from "./components/Logic/UserLayout/types"
import PreLoader from "./components/UI/PreLoader.tsx/PreLoader"
import { UsersStateContext, UsersDispatchContext } from "./contexts/users"
const UserLayout = React.lazy(
	() => import("./components/Logic/UserLayout/UserLayout")
)
function App() {
	const [users, setUsers] = useState<IUser[]>([])

	return (
		<div className='App'>
			{
				<UsersDispatchContext.Provider value={{ setUsers }}>
					<UsersStateContext.Provider value={{ users }}>
						<Box sx={{ backgroundColor: "#F8F8F8" }}>
							<NavBar />
							<Main />
							<Suspense fallback={<PreLoader />}>
								<UserLayout />
							</Suspense>
							<PostBlock />
						</Box>
					</UsersStateContext.Provider>
				</UsersDispatchContext.Provider>
			}
		</div>
	)
}

export default App
