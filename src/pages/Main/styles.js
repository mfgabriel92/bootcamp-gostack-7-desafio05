import styled from 'styled-components'

export const Container = styled.div``

export const Form = styled.form`
  display: flex;
  margin-top: 20px;

  input {
    flex: 1;
    border: 1px #eee;
    padding: 10px 15px;
  }
`

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  & + li {
    border-top: 1px solid #a17aa7 !important;
  }

  li {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    a {
      color: #fff;
    }
  }
`
