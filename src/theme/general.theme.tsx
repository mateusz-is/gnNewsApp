import { Theme, createTheme } from "@mui/material";

let theme: Theme = createTheme({
	palette: {
		primary: {
			light: "#9898ff",
			main: "#5d5dd1",
			dark: "#1e1e37",
		},
	},
});

theme = {
	...theme,
	components: {
		MuiDrawer: {
			styleOverrides: {
				paper: {
					backgroundColor: "#161d24",
					
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: "#ffffff",
					color: "#000000",
					"&:hover": {
						backgroundColor: "#dddddd",
					},
				},
			},
		},
		MuiToggleButton: {
			styleOverrides: {
				root: {
					backgroundColor: "#ffffff",
					color: "#000000",
					"&:hover": {
						backgroundColor: "#dddddd",
					},
				},
			},
		},

		MuiListItemText: {
			styleOverrides: {
				primary: {
					fontSize: 14,
				},
			},
		},
	},
};

export { theme };
