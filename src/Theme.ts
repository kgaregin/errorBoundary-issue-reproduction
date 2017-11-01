import {green, red, grey} from 'material-ui/colors';
import createMuiTheme, {ThemeOptions} from 'material-ui/styles/createMuiTheme';
import {Theme} from "material-ui/styles";

export const theme: Theme = createMuiTheme({
    palette: {
        primary: grey, // Purple and green play nicely together.
        secondary: green,
        error: red,
        type: "dark"
    }
} as ThemeOptions);
