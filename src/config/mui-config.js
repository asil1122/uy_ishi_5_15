import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 950,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        h1: {
            fontWeight: 700,
            fontSize: 53,
            lineHeight: '0%',
            letterSpacing: '0.01em',
        },
        h2: {
            fontFamily: 'var(--second-family)',
            fontWeight: 700,
            fontSize: 34,
            color: '#0d0e43',
        },
        h3: {
            fontWeight: 700,
            fontSize: '18px',
        },
        body1: {
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "100%",
        },
        body2: {
            fontWeight: 600,
            fontSize: '16px',
        },
        h4: {
            fontWeight: 400,
            fontSize: '14px',
        },
    },
    //   palette: {
    //     primary: {
    //       main: "#618C78",
    //       50: "#F0F5F2",
    //       100: "#DEE8E3",
    //       200: "#C0D3CA",
    //       300: "#9FBCAE",
    //       400: "#7EA593",
    //       500: "#618C78",
    //       600: "#4D6F5F",
    //       700: "#3A5448",
    //       800: "#283931",
    //       900: "#131B17",
    //       950: "#0A0F0D",
    //     },
    //     pink: {
    //       main: "#FB2E86",
    //       50: "#FFEBF3",
    //       100: "#FED7E8",
    //       200: "#FDAACE",
    //       300: "#FD82B7",
    //       400: "#FC5AA0",
    //       500: "#FB2E86",
    //       600: "#EB0568",
    //       700: "#AF034E",
    //       800: "#730233",
    //       900: "#3C011B",
    //       950: "#1E010D"
    //     },
    //     text: {
    //       main: "#1d1d1d",
    //       50: "#E8E8E8",
    //       100: "#D1D1D1",
    //       200: "#A6A6A6",
    //       300: "#787878",
    //       400: "#4A4A4A",
    //       500: "#1D1D1D",
    //       600: "#171717",
    //       700: "#121212",
    //       800: "#0D0D0D",
    //       900: "#050505",
    //       950: "#030303",
    //     },
    //     secondary: {
    //       main: "#CB4A4A",
    //       50: "#F9EBEB",
    //       100: "#F5DBDB",
    //       200: "#EBB8B8",
    //       300: "#E09494",
    //       400: "#D56C6C",
    //       500: "#CB4A4A",
    //       600: "#AA3131",
    //       700: "#832626",
    //       800: "#571919",
    //       900: "#2C0D0D",
    //       950: "#140606",
    //     },
    //   },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 2,
                    backgroundColor: '#fb2e86',
                    padding: '16px 40px',
                    fontWeight: 600,
                    fontSize: 17,
                    letterSpacing: '0.02em',
                    color: '#fff',
                },
            },
        },
        MuiTextField: {
            variants: [
                {
                    props: { variant: "filled" },
                    style: {
                        backgroundColor: "#fff",
                    },
                },
            ],
        },
        MuiContainer: {
            styleOverrides: {
                maxWidthXs: {
                    maxWidth: "1200px !important",
                },
            },
        },
    },
});
