import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaSpinner } from 'react-icons/fa'
import { Span } from './styles'

class Loading extends Component {
  render() {
    const { loading } = this.props

    return (
      <Span>
        <FaSpinner loading={loading} />
      </Span>
    )
  }
}

Loading.propTypes = {
  loading: PropTypes.bool
}

Loading.defaultProps = {
  loading: false
}

export default Loading
