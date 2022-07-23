import { Box, Button } from "@mui/material"
import { memo, useContext, useEffect, useState } from "react"
import {
	UsersDispatchContext,
	UsersStateContext,
} from "../../../contexts/users"
import { MUIContainer } from "../../UI/Container/MUIContainer"
import { IUsersInfo } from "./types"
import { UserList } from "./UserList/UserList"

export const UserLayout = memo(() => {
	const [usersInfo, setUsersInfo] = useState<IUsersInfo | null>(null)
	const { setUsers } = useContext(UsersDispatchContext)
	const { users } = useContext(UsersStateContext)

	const handleShowMore = () => {
		if (usersInfo?.links.next_url) {
			fetch(usersInfo?.links.next_url)
				.then((response) => response.json())
				.then((data) => {
					setUsersInfo(data)
					setUsers(users ? [...users, ...data.users] : data.users)
				})
		}
	}

	useEffect(() => {
		fetch(
			" https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
		)
			.then((response) => response.json())
			.then((data) => {
				setUsersInfo(data)
				setUsers(data.users)
			})
	}, [setUsers])
	if (!usersInfo) return null
	if (users?.length === 0) return null
	return (
		<MUIContainer>
			<Box id='users' sx={{ textAlign: "center" }}>
				<h1
					style={{
						marginTop: "120px",
						marginBottom: "50px",
					}}
				>
					Working with GET request
				</h1>
				{users ? <UserList list={users} /> : null}
				{usersInfo.links.next_url ? (
					<Button
						onClick={handleShowMore}
						sx={{ marginTop: "50px" }}
						variant={"contained"}
					>
						Show more
					</Button>
				) : null}
			</Box>
		</MUIContainer>
	)
})
UserLayout.displayName = "UserLayout"
