import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            color: "#fff",
            backgroundColor: "#000",
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#191c24',
            color: '#fff',
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: '#fff',
          }
        }
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            display: "flex",
            gap: 4,
            alignItems: "center"
          }
        }
      },
    },
    palette: {
      secondary: {
        main: '#191c24', //semi-black
        dark: "#000", // black
        light: "#fff", // white
        contrastText: "#6c7293" // semi-black-text
      },
    },
  });