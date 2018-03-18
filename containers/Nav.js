import React, { Component } from 'react'
import Link from 'next/link'
import Divider from 'material-ui/Divider'
import { Menu, MenuItem } from 'material-ui/Menu'
import FontIcon from 'material-ui/FontIcon';
import { blue500 } from 'material-ui/styles/colors';

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

        return (
            <div>
                <Divider />
                <Menu>
                    <MenuItem
                        primaryText={<Link href="/"><a>Topics</a></Link>}
                        leftIcon={homeIcon} />
                    <MenuItem
                        primaryText={<Link href="/post"><a>Post A Message</a></Link>}
                        leftIcon={postIcon} />
                </Menu>
            </div>
        );
    }
};

export default Nav;
