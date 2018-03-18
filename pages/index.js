import React, { Component } from 'react'

class Pwa extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            this.state.loading
            ? <div>Loading</div>
            : <div>Welcome to next.js!</div>
        );
    }
}

export default Pwa
