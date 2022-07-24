import { Box, CircularProgress } from "@mui/material"
import React from "react"

const PreLoader = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<CircularProgress />
		</Box>
	)
}

export default PreLoader
