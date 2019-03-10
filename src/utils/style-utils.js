import { css } from 'styled-components';

const sizes =  {
  sm: 720,
  md: 990,
  lg: 1280,
}


const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
 return acc
}, {})

export const { sm, md, lg } = media;