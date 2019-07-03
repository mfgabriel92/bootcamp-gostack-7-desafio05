import styled from 'styled-components'

export const Container = styled.div``

export const Form = styled.form`
  display: flex;
  margin-top: 20px;

  input {
    display: flex;
    flex: 1;
    border: ${props => (props.errors ? '1px solid red' : '1px solid #eee')};
    background: ${props => (props.errors ? '#ffd4d4' : '#fff')};
    padding: 10px 15px;
  }
`

export const ErrorMessage = styled.span`
  margin-top: 10px;
  color: #f9bfbf;
  display: flex;
  flex: 1;
  margin-bottom: -26px;
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
