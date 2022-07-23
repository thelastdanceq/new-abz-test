import createTheme from "@mui/material/styles/createTheme"

export const theme = createTheme({
	palette: {
		primary: {
			main: "#000",
		},
		secondary: {
			main: "#F4E041",
		},
		info: {
			main: "#fff",
		},
	},
	breakpoints: {
		values: {
			xs: 10,
			sm: 768,
			md: 1024,
			lg: 2560,
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
					fontStyle: "normal",
					fontWeight: 400,
					fontSize: "16px",
					lineHeight: "26px",
					borderRadius: "80px",
					paddingTop: "4px",
					paddingBottom: "4px",
					color: "black",
					minWidth: "100px",
					maxWidth: "120px",
					textTransform: "none",
					backgroundColor: "#F4E041",
					"&:hover": {
						backgroundColor: "#FFE302",
					},
				},
			},
		},
	},
})
