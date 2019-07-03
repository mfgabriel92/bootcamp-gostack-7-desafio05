import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Spinner, Header, Filter, Issues, Pagination } from './styles'
import Container from '../../components/Container'
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import Api from '../../services/Api'

class Repository extends Component {
  state = {
    repository: {},
    issues: {},
    state: 'open',
    page: 1,
    loading: true,
    issuesLoading: false
  }

  async componentDidMount() {
    const {
      match: { params }
    } = this.props
    const repo = decodeURIComponent(params.name)

    const { page, state } = this.state

    const [repository, issues] = await Promise.all([
      Api.get(`/repos/${repo}`),
      Api.get(`/repos/${repo}/issues`, {
        params: {
          state,
          page,
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

  async componentDidUpdate(_, prevState) {
    const { page, state } = this.state

    if (page !== prevState.page || state !== prevState.state) {
      this.setState({ issuesLoading: true })

      const { repository } = this.state

      const { data } = await Api.get(`/repos/${repository.full_name}/issues`, {
        params: {
          state,
          page,
          per_page: 5
        }
      })

      this.setState({
        issues: data,
        issuesLoading: false
      })
    }
  }

  handleOnFilter = async e => {
    this.setState({
      state: e.target.value
    })
  }

  handlePagination = action => {
    const { page } = this.state

    switch (action) {
      case 'previous':
        if (page > 1) {
          this.setState({ page: this.state.page - 1 })
        }
        break
      case 'next':
        this.setState({ page: this.state.page + 1 })
        break
      default:
        break
    }
  }

  render() {
    const { repository, issues, loading, issuesLoading, page } = this.state

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

        <Filter onChange={this.handleOnFilter} defaultValue="open">
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </Filter>

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

        <Pagination>
          <Button
            disabled={page === 1}
            loading={issuesLoading}
            text="Previous"
            onClick={() => this.handlePagination('previous')}
            type="button"
          />
          <span>{page}</span>
          <Button
            loading={issuesLoading}
            text="Next"
            onClick={() => this.handlePagination('next')}
            type="button"
          />
        </Pagination>
      </Container>
    )
  }
}

export default Repository
