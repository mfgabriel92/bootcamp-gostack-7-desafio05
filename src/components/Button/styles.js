import styled, { keyframes, css } from 'styled-components'

const rotation = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`
export const RegularButton = styled.button.attrs(props => ({
  type: props.type,
  disabled: props.loading,
  onclick: props.onClick
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
