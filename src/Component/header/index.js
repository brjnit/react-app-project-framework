import React from "react";
import PropTypes from 'prop-types';
import { ArrowBack, Menu} from '@material-ui/icons';
import './styles.scss'

const Header = (props) => {
    const {title, isBack, emitEvent} = props
    const submitEvent = () => {
        console.log("event triggered")
        emitEvent();
    }
    return(
        <header data-test="headerComponent">
            <div className = "button" onClick = {submitEvent}>
            {isBack ? <ArrowBack/> : <Menu/>
            }
            </div>
            <div className = "wrap">{title}</div>  
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string,
    isBack: PropTypes.bool,
    emitEvent: PropTypes.func
}

export default Header;