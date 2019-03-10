import styled from 'styled-components'
import { sm, md, lg } from '../utils/style-utils';


export const PythonFunctionsHeadline = styled.h2`
  text-align: center;
`
export const PythonFunctionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  ${sm`grid-template-columns: repeat(2, 1fr)`}
  ${md`grid-template-columns: 1fr;`}
  ${lg`grid-template-columns: repeat(2, 1fr);`}
`