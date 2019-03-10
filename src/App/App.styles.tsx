import styled from 'styled-components'
import { md } from '../utils/style-utils';

export const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;
  ${md`grid-template-columns: repeat(2, 1fr);`}
`