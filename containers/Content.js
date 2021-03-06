import React, { Component } from 'react';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { blue500, white100 } from 'material-ui/styles/colors'
import Avatar from 'material-ui/Avatar'
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress'
import RaisedButton from 'material-ui/RaisedButton'
import { timeSince } from '../util'

class Content extends Component {
    state = {
        loading: false,
        posts: [],
    }

    async componentDidMount() {
        this.setState({ loading: true })

        const res = await fetch('/posts')
        const posts = await res.json()

        this.setState({ posts, loading: false })
    }

    render() {
        if (this.state.loading) {
            const loaderStyle = {
                display: 'block',
                marginTop: '30px',
                marginRight: 'auto',
                marginLeft: 'auto',
            }
            return <CircularProgress size={60} thickness={7} style={loaderStyle}/>
        }

        if (this.state.posts.length === 0) {
            const buttonStyle = {
                display: 'inline-block',
                marginTop: '30px',
            }

            return (
                <Link href="/post">
                    <a><RaisedButton label="Go Send A Post" primary={true} style={buttonStyle}/></a>
                </Link>
            )
        }

        const cardStyle = {
            margin: 15,
            display: 'inline-block',
            textAlign: 'left',
        }

        const cardClassName = 'col-xs-12 col-sm-5 col-md-3 col-lg-2'

        return this.state.posts.map(data => (
            <Card key={data.time} style={cardStyle} className={cardClassName}>
                <CardHeader
                    title={data.name}
                    subtitle={`${timeSince(data.time)} ago`}
                    avatar={<Avatar size={32} color={white100} backgroundColor={blue500}>{data.name[0]}</Avatar>}
                />
                <CardMedia overlay={<CardTitle title={data.title} subtitle={data.subtitle} />}>
                    <img src={data.picUrl} />
                </CardMedia>
            </Card>
        ))
    }
};

export default Content;
