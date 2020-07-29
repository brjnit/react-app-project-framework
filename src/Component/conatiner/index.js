import React from "react";
import './styles.scss'

const Conatiner = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>
    )
}

export default Conatiner;