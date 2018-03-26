import React, { Component } from 'react'
import Router from 'next/router'
import Subheader from 'material-ui/Subheader'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconButton from 'material-ui/IconButton'
import fetch from 'isomorphic-unfetch'

const style = {
    margin: 20,
    width: 'auto',
    maxWidth: 500,
    padding: 10,
};

const picPreviewStyle = {
    margin: 'auto',
    width: 200,
    height: 200,
}

const imgPreviewStyle = {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
}

class Post extends Component {
    state = {
        name: '',
        title: '',
        subtitle: '',
        picUrl: '',
    }

    async componentDidMount() {
        const res = await fetch('/image')
        const image = await res.text()
        this.setState({ picUrl: image })
    }

    addPost = async () => {
        const post = Object.assign({ time: new Date().toJSON() }, this.state)
        const headers = { 'Content-Type': 'application/json' }
        const res = await fetch('/post', { headers, method: 'POST', body: JSON.stringify(post) })
        const result = await res.json()
        Router.push({ pathname: '/' })
    }

    onRefresh = async () => {
        const res = await fetch('/image')
        const image = await res.text()
        this.setState({ picUrl: image })
    }

    render() {
        const inputField = (
            <div>
                <Subheader>Post Your Status</Subheader>
                <TextField
                    fullWidth={true}
                    value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value })}
                    floatingLabelText="Input Your Name"
                /><br />
                <TextField
                    fullWidth={true}
                    value={this.state.title}
                    onChange={event => this.setState({ title: event.target.value })}
                    floatingLabelText="Input Post Title"
                /><br />
                <TextField
                    fullWidth={true}
                    value={this.state.subtitle}
                    onChange={event => this.setState({ subtitle: event.target.value })}
                    floatingLabelText="Say Something Here"
                    multiLine={true}
                    rows={2}
                /><br /><br />
                <div style={{ textAlign: 'center' }}>
                    <Paper style={picPreviewStyle} zDepth={1} rounded={false} children={<img src={this.state.picUrl} style={imgPreviewStyle}/>} />
                    <IconButton iconClassName="material-icons" tooltip="Try others" onClick={this.onRefresh}>refresh</IconButton>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <FloatingActionButton mini={true} onClick={this.addPost}>
                        <FontIcon className="material-icons">send</FontIcon>
                    </FloatingActionButton>
                </div>
            </div>
        )

        return <Paper style={style} zDepth={1} children={inputField}/>
    }
}

export default Post
