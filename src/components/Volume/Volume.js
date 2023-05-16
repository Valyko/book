import React from "react";
import PropTypes from 'prop-types'

const Volume = ({className, onClick}) => {
    return <div className={className} onClick={onClick}/>
}

Volume.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default Volume;