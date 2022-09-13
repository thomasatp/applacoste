import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { useScroll } from '../../hooks/useScroll'
import mediaQueries from '../../utils/mediaQueries'
import Filters from '../../medias/icons/Filters'

function FilterBar({ filters, setFilters, productView, setProductView, gridValue, setGridValue }) {
  const scrollDisplay = useScroll()

  function handleRange(e) {
    setGridValue(e.target.value)
  }
  return (
    <Wrapper stickyLevel={scrollDisplay}>
      <div className='flex align-center' onClick={() => setFilters(!filters)}>
        <Filters color={colors.codegray} toggle={filters} />
        <p className='caption bold ml-sm'>{filters ? 'Hide filters' : 'Display filters'}</p>
      </div>
      <div className='flex align-center'>
        <p className='caption bold mr-m' onClick={() => setProductView(!productView)}>
          {productView ? 'Model view' : 'Product view'}
        </p>
        <Range
          type='range'
          min='0'
          max='100'
          defaultValue={gridValue}
          onChange={handleRange}
          id='grid'
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.7rem 4vw;
  align-items: center;
  position: sticky;
  transition: ease 0.3s;
  top: ${({ stickyLevel }) => (stickyLevel ? '11.3rem' : '0rem')};
  z-index: 1000;
  background: ${colors.white};
  cursor: pointer;

  @media ${mediaQueries.mobileOnly} {
    top: ${({ stickyLevel }) => (stickyLevel ? '10.3rem' : '0rem')};
  }
`

const Range = styled.input`
  width: 8rem;
  padding: 0;
  outline: none;
  box-shadow: none;
  appearance: none;
  height: 0.1rem;
  background: ${colors.codegray};
  cursor: pointer;

  ::-webkit-slider-thumb {
    appearance: none;
    outline: none;
    box-shadow: none;
    background: ${colors.white};
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    border: 1px solid ${colors.codegray};
  }
`
export default FilterBar
