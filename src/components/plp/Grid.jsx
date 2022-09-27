import React from 'react'
import styled from 'styled-components'
import mediaQueries from '../../utils/mediaQueries'

function Grid({ filters, children, gridValue }) {
  return (
    <Wrapper gridValue={gridValue} filters={filters}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  padding: ${({ filters }) => (filters ? '0 4vw 0 37.5rem' : '0 4vw')};
  transition: ease-out 0.4s;
  grid-template-columns: ${({ gridValue }) =>
    gridValue < 25
      ? 'repeat(auto-fill, minmax(calc(100%/6 - 0.8rem), 1fr))'
      : gridValue >= 25 && gridValue < 50
      ? 'repeat(auto-fill, minmax(calc(20% - 0.8rem), 1fr))'
      : gridValue >= 50 && gridValue < 75
      ? 'repeat(auto-fill, minmax(calc(25% - 0.8rem), 1fr))'
      : 'repeat(auto-fill, minmax(calc(100%/3 - 0.8rem), 1fr))'};
  grid-column-gap: 0.8rem;
  @media ${mediaQueries.mobileOnly} {
    padding: 0 0;
    grid-template-columns: ${({ gridValue }) =>
      gridValue < 50
        ? 'repeat(auto-fill, minmax(calc(50% - 0.2rem), 1fr))'
        : 'repeat(auto-fill, minmax(100%, 1fr))'};
    column-gap: 0.2rem;
  }
`
export default Grid
