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

export const Issues = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #b47be4;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding: 15px 10px;
    border: 1px solid #b47be4;
    border-radius: 4px;

    & + li {
      margin-top: 20px;
    }

    img {
      width: 45px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 1 6px;

        a {
          color: #fff;
          text-decoration: none;

          &:hover {
            color: #eee;
          }
        }

        span {
          background: #b47be4;
          color: #eee;
          font-size: 12px;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
          border-radius: 3px;
        }
      }

      p {
        margin-top: 5px;
        color: #ccc;
      }
    }
  }
`
