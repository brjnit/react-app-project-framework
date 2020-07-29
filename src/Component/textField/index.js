import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { Input } from '@material-ui/core';
import './styles.scss'

const TextField = (props) => {
    const { placeHolder, value, onTextChange } = props
    const [textValue, setTextValue] = useState('')
    const handleChange = (event) => {
        const currentValue = event.target.value
        setTextValue(currentValue)
        onTextChange(textValue)
    }
    useEffect(() => {
        setTextValue(value)
    }, []);
    
    return (
        <div className="TextField">
            <Input className="input"
            placeholder = {placeHolder}
            value={textValue}
            onChange={handleChange}
            />
        </div>
    )
}
TextField.propTypes = {
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    onTextChange: (value) => {}
}

export default TextField;