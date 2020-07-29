import React from "react";
import './styles.scss'

const Footer = (props) => {
    return(
        <div className="footer">
            {props.children}
        </div>
    )
}

export default Footer;