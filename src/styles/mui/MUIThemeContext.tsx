import createTheme from "@mui/material/styles/createTheme"

export const theme = createTheme({
	palette: {
		secondary: {
			main: "#F4E041",
		},
		info: {
			main: "#fff",
		},
	},
	breakpoints: {
		values: {
			xs: 328,
			sm: 344 * 2 + 16,
			md: 282 * 3 + 29 * 2,
			lg: 370 * 3 + 29 * 2,
			xl: 1536,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					"&.Mui-disabled": {
						backgroundColor: "#B4B4B4",
					},
				},
				contained: {
					borderRadius: "80px",
					padding: "4px 28px",
					color: "black",
					maxWidth: "120px",
					backgroundColor: "#F4E041",
					"&:hover": {
						backgroundColor: "#FFE302",
					},
				},
			},
		},
	},
})
