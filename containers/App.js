import React, { Component } from 'react';
import Link from 'next/link'
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon'
import { white } from 'material-ui/styles/colors'
import Nav from './Nav';

const containerStyle = {
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

    onNavClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.props.toggleNav();
    }

    render() {
        const titleLink = <Link href="/"><a>PWA</a></Link>
        const navIcon = (
            <Link href="/nav">
                <a>
                    <FontIcon className="material-icons" color={white} style={{ marginTop: '12px' }} onClick={this.onNavClick}>menu</FontIcon>
                </a>
            </Link>
        )

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
                <AppBar title={titleLink} iconElementLeft={navIcon} />
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
