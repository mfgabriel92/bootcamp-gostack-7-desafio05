import styled, { keyframes, css } from 'styled-components'

const rotation = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`
export const Button = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading
}))`
  background: #5e0e9e;
  color: #fff;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotation} 1s linear infinite;
      }
    `}
`
