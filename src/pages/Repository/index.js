import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Spinner, Header, Issues } from './styles'
import Container from '../../components/Container'
import Loading from '../../components/Loading'
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
    const { repository, issues, loading } = this.state

    if (loading) {
      return (
        <Spinner>
          <Loading loading={loading} />
        </Spinner>
      )
    }

    return (
      <Container>
        <Header>
          <Link to="/">Back</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h3>{repository.full_name}</h3>
          <p>{repository.description}</p>
        </Header>

        <Issues>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </Issues>
      </Container>
    )
  }
}

export default Repository
