import React, { useEffect, useState } from "react"
import { MUIContainer } from "../Container/MUIContainer"
import { IUsersInfo } from "./types"
import { UserList } from "./UserList/UserList"

export const UserLayout = () => {
	const [usersInfo, setUsersInfo] = useState<IUsersInfo | null>(null)
	useEffect(() => {
		fetch(
			" https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5"
		)
			.then((response) => response.json())
			.then((data) => setUsersInfo(data))
	}, [])
	if (!usersInfo) return null
	return (
		<MUIContainer>
			<UserList list={usersInfo?.users} />
		</MUIContainer>
	)
}
