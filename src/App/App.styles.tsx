import styled from 'styled-components'

export const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;
  @media(min-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }
`