import styled from 'styled-components'

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-bottom: 10px;
    text-decoration: none;
    color: #fff;
  }

  img {
    width: 150px;
    border-radius: 50%;
  }

  h3 {
    margin-top: 15px;
    color: #fff;
  }

  p {
    margin-top: 10px;
    color: #fff;
    line-height: 1.4;
    font-style: italic;
    text-align: center;
    max-width: 400px;
  }
`
