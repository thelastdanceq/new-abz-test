import { Container, useMediaQuery } from "@mui/material"
import React, { PropsWithChildren } from "react"
const getCurrentSize = (
	small: boolean,
	middle: boolean,
	large: boolean,
	extraLarge: boolean
) => {
	if (extraLarge) return 370 * 3 + 29 * 2
	if (large) return 282 * 3 + 29 * 2
	if (middle) return 344 * 2 + 16
	return 328
}
export const MUIContainer: React.FC<PropsWithChildren> = ({ children }) => {
	const xs = useMediaQuery("(min-width:360px)")
	const sm = useMediaQuery("(min-width:768px)")
	const md = useMediaQuery("(min-width:1024px)")
	const lg = useMediaQuery("(min-width:2560px)")

	return (
		<Container
			sx={{ maxWidth: getCurrentSize(xs, sm, md, lg) + "px" }}
			disableGutters
			maxWidth={false}
		>
			{children}
		</Container>
	)
}
