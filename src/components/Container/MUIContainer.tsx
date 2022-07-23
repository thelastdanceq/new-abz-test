import { Container, useMediaQuery } from "@mui/material"
import React, { PropsWithChildren } from "react"
const getCurrentSize = (
	small: boolean,
	middle: boolean,
	large: boolean,
	extraLarge: boolean
) => {
	if (extraLarge) return "lg"
	if (large) return "md"
	if (middle) return "sm"
	if (small) return "xs"
}
export const MUIContainer: React.FC<PropsWithChildren> = ({ children }) => {
	const xs = useMediaQuery("(min-width:360px)")
	const sm = useMediaQuery("(min-width:768px)")
	const md = useMediaQuery("(min-width:1024px)")
	const lg = useMediaQuery("(min-width:2560px)")
	console.log(xs, sm, md, lg)

	return (
		<Container maxWidth={getCurrentSize(xs, sm, md, lg)}>{children}</Container>
	)
}
