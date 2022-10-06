import React from 'react'
import PropTypes from 'prop-types'
const Button = ({ version, type, isDisabled, text }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {text}
    </button>
  )
}

Button.defaultProps = {
    version : 'primary',
    type : 'Button',
    isDisabled : false
}

Button.propTypes = {
    version : PropTypes.string,
    type : PropTypes.string,
    isDisabled : PropTypes.bool,
    text : PropTypes.string.isRequired
}

export default Button
