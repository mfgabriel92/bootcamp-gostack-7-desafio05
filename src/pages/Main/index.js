import React, { Component } from 'react'
import { FaGithubAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Form, List } from './styles'
import Container from '../../components/Container'
import Button from '../../components/SubmitButton'
import Api from '../../services/Api'

class Main extends Component {
  state = {
    repository: '',
    repositories: [],
    loading: false
  }

  componentDidMount() {
    const repositories = localStorage.getItem('repositories')

    if (repositories) {
      this.setState({
        repositories: JSON.parse(repositories)
      })
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories))
    }
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = async e => {
    e.preventDefault()

    this.setState({ loading: true })

    const { repository, repositories } = this.state
    const { data } = await Api.get(`/repos/${repository}`)
    const repos = {
      id: data.id,
      name: data.full_name
    }

    this.setState({
      repository: '',
      repositories: [...repositories, repos],
      loading: false
    })
  }

  render() {
    const { repository, repositories, loading } = this.state

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositories
        </h1>

        <Form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="repository"
            value={repository}
            placeholder="Add repository"
            disabled={loading}
            onChange={this.handleOnChange}
          />

          <Button loading={loading} />
        </Form>

        <List>
          {repositories.map(repo => (
            <li key={repo.name}>
              <span>{repo.name}</span>
              <Link to={`/repository/${encodeURIComponent(repo.name)}`}>Details</Link>
            </li>
          ))}
        </List>
      </Container>
    )
  }
}

export default Main
