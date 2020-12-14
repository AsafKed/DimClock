import React from "react"


class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: new Date().toLocaleTimeString('en-US') }
    }

    componentDidMount() {
        this.interval = setInterval(() => 
            this.setState({ time: new Date().toLocaleTimeString('en-US')}))
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
 
    render() {
        return <div id="Clock">{this.state.time}</div>
    }
}

export default Clock