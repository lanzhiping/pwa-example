import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import Head from 'next/head'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blue100, blue500, blue700 } from 'material-ui/styles/colors';
import App from '../containers/App'
import reducers from '../reducers'

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
const store = createStore(combineReducers(reducers))
const containerStyle = {
    border: '1px red solid',
    width: '100%',
    padding: 0,
    margin: 0
};

export default () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div style={containerStyle}>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    </MuiThemeProvider>
)
