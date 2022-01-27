import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: 'rgba(37, 99, 235, 1);',
            dark: 'rgba(29, 78, 216, 1);',
            light: 'rgba(59, 130, 246, 1);',
        },
        secondary: {
            main: 'rgba(219, 39, 119, 1);',
            dark: 'rgba(190, 24, 93, 1);',
            light: 'rgba(236, 72, 153, 1);',
        },
        white: {
            main: '#fff',
            dark: '#fff',
            light: '#fff',
        },
        red: {
            main: 'rgba(239, 68, 68, 1)',
            dark: 'rgb(248, 113, 113, 1)',
            light: 'rgba(248, 113, 113, 1)',
        },
    },
    typography: {
        fontFamily: 'IRANSans',
        h1: {
            fontSize: '2.4rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
        }
    },
    shape: {
        borderRadius: 8,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
});

export default theme;