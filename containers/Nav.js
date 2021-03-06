import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { Menu, MenuItem } from 'material-ui/Menu'
import FontIcon from 'material-ui/FontIcon'
import { blue500 } from 'material-ui/styles/colors'

function buildIcon(iconName) {
    const iconStyles = { marginRight: 24 };

    return (
        <FontIcon className="material-icons" style={iconStyles} color={blue500}>{iconName}</FontIcon>
    );
}


class Nav extends Component {
    render() {
        const homeIcon = buildIcon('home')
        const postIcon = buildIcon('rss_feed')
        const imageStyle = {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: '0 0',
        }
        const navImage = <img src={'../pwa-lighthouse.png'} style={imageStyle} />
        const paperStyle = {
            height: 200,
            width: '100%',
            marginBottom: 20,
            textAlign: 'center',
            display: 'inline-block',
        }

        return (
            <div style={{ textAlign: 'left' }}>
                <Paper style={paperStyle} zDepth={0} children={navImage} />
                <Divider />
                <Menu width={300} autoWidth={false}>
                    <Link href="/">
                        <a><MenuItem leftIcon={homeIcon} onClick={this.props.toggleNav}>Topics</MenuItem></a>
                    </Link>
                    <Link href="/post">
                        <a><MenuItem leftIcon={postIcon} onClick={this.props.toggleNav}>Post A Message</MenuItem></a>
                    </Link>
                </Menu>
            </div>
        );
    }
};

export default connect(
    () => ({}),
    dispatch => ({
        toggleNav: () => dispatch({ type: 'TOGGLE_NAV' })
    })
)(Nav);
