import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Nav from './Nav';

const containerStyle = {
    border: '1px red solid',
    width: '100%',
    padding: 0,
    margin: 0
};

class App extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <div style={containerStyle}>
                <Drawer
                    docked={false}
                    width={300}
                    open={this.props.isNavOpen}
                    onRequestChange={this.props.toggleNav}
                >
                    <Nav />
                </Drawer>
                <AppBar title="PWA" onLeftIconButtonClick={this.props.toggleNav} />
                {this.props.children}
            </div>
        );
    }
};

export default connect(
    (state) => ({
        isNavOpen: state.openNav }),
    (dispatch) => ({
        toggleNav: () => dispatch({ type: 'TOGGLE_NAV' })
    })
)(App);
