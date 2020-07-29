import React, { Component } from 'react'
import './styles.scss'
import Header from '../../Component/header';
import Conatiner from '../../Component/conatiner';
import Wrapper from '../../hoc/Wrapper';
import Footer from '../../Component/footer';
import BasicButton from '../../Component/basicButton';
import TextField from '../../Component/textField';
import Title from '../../Component/title';

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

          const configFooter = {
            buttonText: "Next",
            emitEvent: () => {}
        }

        const configTextField = {
            placeHolder: "Enter User Name",
            value: "",
            onTextChange: (value)=> {
                console.log("value", value)
            }
        }
        return (
            <Wrapper>
            <div className='Login'>
                <Header {...configHeader}/>
                <Conatiner> 
                    <Title> Login Page </Title>
                    <div> </div> 
                    <div> <TextField {...configTextField}/>
                    </div>
                    <Footer>
                        <BasicButton {...configFooter}/>
                    </Footer>
                </Conatiner>

            </div>
            </Wrapper>
        )
    }
}

Login.propTypes = {

}

export default Login;