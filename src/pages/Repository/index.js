import React, { Component } from 'react'
import Api from '../../services/Api'

class Repository extends Component {
  state = {
    repository: {},
    issues: {},
    loading: true
  }

  async componentDidMount() {
    const {
      match: { params }
    } = this.props
    const repo = decodeURIComponent(params.name)

    const [repository, issues] = await Promise.all([
      Api.get(`/repos/${repo}`),
      Api.get(`/repos/${repo}/issues`, {
        params: {
          state: 'open',
          per_page: 5
        }
      })
    ])

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false
    })
  }

  render() {
    return <></>
  }
}

export default Repository
