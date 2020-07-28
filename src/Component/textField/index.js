import PropTypes from 'prop-types';
import { Input } from '@material-ui/core';
import './styles.scss'

const TextField = (props) => {
    const {placeHolder, value} = props
    const submitEvent = () => {
        emitEvent();
    }
    return(
        <Input className = "TextField" 
        placeHolder = {placeHolder} 
        value = {value}>
        </Input>
    )
}
TextField.propTypes = {
    placeHolder: PropTypes.string,
    value: PropTypes.string,
}

export default TextField;