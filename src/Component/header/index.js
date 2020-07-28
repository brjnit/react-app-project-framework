import React from "react";
import PropTypes from 'prop-types';
import { ArrowBack, Menu} from '@material-ui/icons';
import './styles.scss'

const Header = (props) => {
    const {title, isBack, emitEvent} = props
    const submitEvent = () => {
        emitEvent();
    }
    return(
        <div className = "Header" onClick = {submitEvent} data-test="headerComponent">
            {isBack ? <ArrowBack/> : <Menu/>
            }
            {title}
        </div>
    )
}
Header.propTypes = {
    title: PropTypes.string,
    isBack: PropTypes.bool,
    emitEvent: PropTypes.func
}

export default Header;