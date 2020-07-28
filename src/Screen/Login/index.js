import React, { Component } from 'react'
import './styles.scss'
import Header from '../../Component/header';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const configHeader = {
            title: "Header Title",
            isBack: false,
            emitEvent: () => {}
          }
        return (
            <div className='Login'>
                <Header {...configHeader}/>
                Login
            </div>
        )
    }
}

Login.propTypes = {

}

export default Login;