import React from "react"

const simplify = (date) => {
    return date.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
    })

}

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: simplify(new Date()) }
    }

    componentDidMount() {
        this.interval = setInterval(() => 
            this.setState({ time: simplify(new Date())}))
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
 
    render() {
        return <div id="Clock">{this.state.time}</div>
    }
}

export default Clock