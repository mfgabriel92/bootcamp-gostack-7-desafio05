import React, { Component } from 'react'
import { FaGithubAlt, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Form, List, ErrorMessage } from './styles'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Api from '../../services/Api'

class Main extends Component {
  state = {
    repository: '',
    repositories: [],
    loading: false,
    errors: null
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

    this.setState({ loading: true, errors: null })

    try {
      const { repository, repositories } = this.state
      const { data } = await Api.get(`/repos/${repository}`)
      const repos = {
        id: data.id,
        name: data.full_name
      }

      const exists = repositories.filter(r => r.name === repos.name)

      if (exists.length > 0) {
        throw new Error('Repository already added')
      }

      this.setState({ repositories: [...repositories, repos] })
    } catch (e) {
      this.setState({ errors: e.message })
    } finally {
      this.setState({
        repository: '',
        loading: false
      })
    }
  }

  render() {
    const { repository, repositories, loading, errors } = this.state

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositories
        </h1>

        <Form onSubmit={this.handleOnSubmit} errors={errors}>
          <input
            type="text"
            name="repository"
            value={repository}
            placeholder="Add repository"
            disabled={loading}
            onChange={this.handleOnChange}
          />

          <Button text={<FaPlus />} loading={loading} />
        </Form>

        {errors && <ErrorMessage>{errors}</ErrorMessage>}

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
