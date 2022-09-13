import React from 'react'
import styled from 'styled-components'
import mediaQueries from '../../utils/mediaQueries'

function Grid({ filters, children }) {
  return <Wrapper filters={filters}>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ filters }) =>
    filters ? '0 calc(4vw - 0.4rem) 0 37.5rem' : '0 calc(4vw - 0.4rem)'};
  transition: ease-out 0.4s;

  @media ${mediaQueries.mobileOnly} {
    padding: 0 0;
  }
`
export default Grid
