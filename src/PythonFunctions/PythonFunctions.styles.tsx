import styled from 'styled-components'

export const PythonFunctionsHeadline = styled.h2`
  text-align: center;
`
export const PythonFunctionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media(min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`