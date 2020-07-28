import React, { Component } from 'react'
import './styles.scss'

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div data-test='Home'>
                Home
            </div>
        )
    }
}

Home.propTypes = {

}

export default Home;