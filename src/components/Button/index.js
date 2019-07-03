import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaSpinner } from 'react-icons/fa'
import { RegularButton } from './styles'

class Button extends Component {
  render() {
    const { loading, type, text, disabled, onClick } = this.props

    return (
      <RegularButton loading={loading} type={type} onClick={onClick} disabled={disabled}>
        {loading ? <FaSpinner color="#FFF" size={14} /> : text}
      </RegularButton>
    )
  }
}

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  loading: false,
  disabled: false,
  type: 'submit'
}

export default Button
