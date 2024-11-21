import { createTheme } from '@mui/material/styles';
import baseTheme from './base';

const darkTheme = createTheme({

    palette: {
        mode: 'dark',
        text: {
            primary: '#ffffff',

        },
        background: {
            default: '#212121',
        },
    },
    typography: {
        ...baseTheme.typography,

    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    ...baseTheme.components.MuiDivider.styleOverrides.root,
                    backgroundColor: '#ffffff',
                }
            }
        }
    },
});


export default darkTheme;
