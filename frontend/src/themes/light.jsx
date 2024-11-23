import { createTheme } from '@mui/material/styles';
import baseTheme from './base';

const lightTheme = createTheme({

    palette: {
        mode: 'light',
        text: {
            primary: '#000000',
        },
        background: {
            default: '#f8f9fa',
        },
    },
    typography: {
        ...baseTheme.typography,
        allVariants: {
            color: 'black'
        }
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    ...baseTheme.components.MuiDivider.styleOverrides.root,
                    backgroundColor: '#000000',
                }
            }
        }
    },
});


export default lightTheme;
