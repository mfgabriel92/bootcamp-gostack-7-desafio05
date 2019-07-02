import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaPlus, FaSpinner } from 'react-icons/fa'
import { Button } from './styles'

class SubmitButton extends Component {
  render() {
    const { loading } = this.props

    return (
      <Button loading={loading}>
        {loading ? <FaSpinner color="#FFF" size={14} /> : <FaPlus color="#FFF" size={14} />}
      </Button>
    )
  }
}

SubmitButton.propTypes = {
  loading: PropTypes.bool
}

SubmitButton.defaultProps = {
  loading: false
}

export default SubmitButton
