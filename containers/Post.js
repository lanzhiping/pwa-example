import React, { Component } from 'react'
import Subheader from 'material-ui/Subheader'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const style = {
    margin: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'auto',
    maxWidth: 500,
    padding: 10,
};

class Post extends Component {
    render() {
        const inputField = (
            <div>
                <Subheader>Post Your Status</Subheader>
                <TextField
                    fullWidth={true}
                    floatingLabelText="Input Your Name"
                /><br />
                <TextField
                    fullWidth={true}
                    floatingLabelText="Say Something Here"
                    multiLine={true}
                    rows={2}
                /><br />
                <br />
                <div style={{ textAlign: 'right' }}>
                    <FloatingActionButton mini={true}>
                        <FontIcon className="material-icons">send</FontIcon>
                    </FloatingActionButton>
                </div>
            </div>
        )

        return <Paper style={style} zDepth={1} children={inputField}/>
    }
}

export default Post
