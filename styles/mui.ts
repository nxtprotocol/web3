import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5012FF",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f2f2f2",
    },
    error: {
      main: "#ff2155",
    }
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
  },
  shape: {
    borderRadius: 12,
  },

  // Component customization zone.
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 60px 12px #00000010",
        }
      }
    }
  }
});
