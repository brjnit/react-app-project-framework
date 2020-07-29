import React from "react";
import './styles.scss'

const Title = (props) => {
    return(
        <div className="title">
            {props.children}
        </div>
    )
}

export default Title;