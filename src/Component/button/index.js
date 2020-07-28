import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import './styles.scss'

const BasicButton = (props) => {
    const {buttonText, emitEvent} = props
    const submitEvent = () => {
        emitEvent();
    }
    return(
        <Button className = "BasicButton" onClick = {submitEvent} data-test="buttonComponent">
            {buttonText}
        </Button>
    )
}
BasicButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
}

export default BasicButton;