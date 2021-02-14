import React, { Component } from 'react'
import App from './components/App'

export default class App1 extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-info">Redux Example</h1>
                <App />
            </div>
        )
    }
}
