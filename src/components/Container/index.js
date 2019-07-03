import styled from 'styled-components'

const Container = styled.div`
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

export default Container
