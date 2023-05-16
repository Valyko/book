import React from "react";
import PropTypes from 'prop-types'

const Button = ( {className, onClick}) => {
    return <div className={className} onClick={onClick}/>
    
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;