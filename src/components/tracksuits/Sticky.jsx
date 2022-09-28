import React from 'react'
import styled from 'styled-components'
import { track } from '../../datatrack'
import colors from '../../utils/colors'
import mediaQueries from '../../utils/mediaQueries'
import Image from '../medias/Image'
import Tile from '../plp/Tile'

function Sticky({ reverse, source, title, reference, withoutgrid, color }) {
  return (
    <Container id={title} ref={reference}>
      <Header coloris={color}>
        <MainTitle className='title lacoste'>{title}</MainTitle>
        <p className='subtitle mt-m'>
          At sit viverra dictumst tortor scelerisque blandit semper. Metus euismod ut a facilisis
          turpis. In auctor massa tortor hendrerit consectetur tellus lacus. At dolor eleifend at
          justo habitasse nec dapibus id tristique.{' '}
        </p>
      </Header>
      <StickyContainer reverse={reverse} withoutgrid={withoutgrid}>
        {!withoutgrid && (
          <Title>
            <h3 className='light lacoste'>{title}</h3>
          </Title>
        )}
        <Image src={source} alt={source} />
      </StickyContainer>
      {!withoutgrid && (
        <Wrapper gridValue={2}>
          {track.map((polo, id) => (
            <Tile
              key={id}
              src={polo.image}
              title={polo.title}
              price={polo.price}
              productColors={polo.colors}
              tag={polo.tag}
            />
          ))}
        </Wrapper>
      )}
    </Container>
  )
}

export default Sticky

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ coloris }) => coloris};
  margin-bottom: 4vw;
  padding: 0 32vw;

  @media ${mediaQueries.mobileOnly} {
    padding: 0 4vw;
  }
`

const MainTitle = styled.h2`
  font-size: clamp(5rem, 15vw, 10rem);
  line-height: 1;
`

const Title = styled.div`
  position: absolute;
  z-index: 1;
  transform: translate3d(-50%, -50%, 0);
  top: 50%;
  left: 50%;

  h3 {
    font-size: clamp(5rem, 15vw, 10rem);
    line-height: 1;
    text-align: center;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 6vw 0;
  @media ${mediaQueries.mobileOnly} {
    flex-direction: column;
    align-items: center;
  }
`

const StickyContainer = styled.div`
  position: sticky;
  order: ${({ reverse }) => (reverse ? 1 : 0)};
  width: ${({ withoutgrid }) => (withoutgrid ? '100%' : '48%')};
  top: 0;
  height: 100vh;
  z-index: 0;

  @media ${mediaQueries.mobileOnly} {
    width: 100%;
    order: 0;
  }
`
const Wrapper = styled.div`
  display: grid;
  z-index: 2;
  clip-path: inset(0);
  flex: 1;
  padding: ${({ filters }) => (filters ? '0 4vw 0 37.5rem' : '0 4vw')};
  transition: ease-out 0.4s;
  grid-template-columns: repeat(auto-fill, minmax(calc(100% / 2 - 0.8rem), 1fr));
  grid-column-gap: 0.8rem;

  @media ${mediaQueries.mobileOnly} {
    padding: 0.8rem;
    grid-template-columns: repeat(auto-fill, minmax(calc(50% - 0.2rem), 1fr));
    column-gap: 0.2rem;
    width: 96%;
    background-color: ${colors.white};
  }
`
