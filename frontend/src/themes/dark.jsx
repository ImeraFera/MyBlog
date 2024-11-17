import { createTheme } from '@mui/material/styles';
import baseTheme from './base';

const darkTheme = createTheme({
    palette: {
        text: {
            primary: '#fff',
        },
    },
    typography: {
        ...baseTheme.typography,

    },
    components: {

    },
});


export default darkTheme;
