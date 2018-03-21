import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blue100, blue500, blue700 } from 'material-ui/styles/colors';

const store = createStore(combineReducers(reducers))
const muiTheme = getMuiTheme(
    {
        palette: {
            primary1Color: blue500,
            primary2Color: blue700,
            primary3Color: blue100
        }
    },
    {
        avatar: {
            borderColor: null
        }
    }
);

export default (props) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            {props.children}
        </Provider>
    </MuiThemeProvider>
)