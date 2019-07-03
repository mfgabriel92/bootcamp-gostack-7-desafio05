import styled, { keyframes, css } from 'styled-components'

const rotation = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`

export const Span = styled.span`
  font-size: 52px;

  ${() =>
    css`
      svg {
        animation: ${rotation} 1s linear infinite;
      }
    `}
`
