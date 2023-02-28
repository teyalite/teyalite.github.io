import { Sora } from "@next/font/google";
import { createTheme } from "@mui/material/styles";

export const sora = Sora({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: sora.style.fontFamily,
    },
    palette: {
        // primary: {
        //     main: "#00AD61",
        // },
        // secondary: {
        //     main: "#000000",
        // },
        // // Light blue color
        // warning: {
        //     main: "#2D9CDB",
        // },
        // // Blue color
        // info: {
        //     main: "#2F80ED",
        // },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
        // MuiListItem: {
        //     styleOverrides: {
        //         selected: {
        //             backgroundColor: "#2F80ED",
        //         },
        //     },
        // },
        // MuiListItemButton: {
        //     styleOverrides: {
        //         selected: {
        //             backgroundColor: "#2F80ED",
        //         },
        //     },
        // },
    },
});

export default theme;
