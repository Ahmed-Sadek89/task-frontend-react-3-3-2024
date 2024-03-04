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
      }
    },
    palette: {
      primary: {
        main: '#191c24',
      },
      secondary: {
        main: '#000',
      },
    },
  });