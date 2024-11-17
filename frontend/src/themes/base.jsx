import { createTheme } from '@mui/material/styles';

const baseTheme = {
    typography: {
        fontFamily: 'Bai Jamjuree, Arial, sans-serif',
        fontSize: 14,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#005BBA',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#003f88',
                    },
                    textTransform: 'none',
                },
            },
        },
    },

};

export default baseTheme;
