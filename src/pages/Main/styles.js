import styled from 'styled-components'

export const Container = styled.div`
  max-width: 768px;
  background: #9157c1;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  padding: 20px;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #fff;

    svg {
      margin-right: 10px;
    }
  }
`

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
