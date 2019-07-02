import React, { Component } from 'react'
import { FaGithubAlt } from 'react-icons/fa'
import { Container, Form } from './styles'
import Button from '../../components/SubmitButton'
import Api from '../../services/Api'

class Main extends Component {
  state = {
    repository: '',
    repositories: [],
    loading: false
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
    const { repository, loading } = this.state

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
      </Container>
    )
  }
}

export default Main