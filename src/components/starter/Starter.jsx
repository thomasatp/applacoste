import React from 'react'
import useObserver from '../../hooks/useObserver'
import styled from 'styled-components'
import durable from '../../medias/videos/durable.mp4'
import colors from '../../utils/colors'
import mediaQueries from '../../utils/mediaQueries'
import Video from '../medias/Video'

export default function Starter() {
  const [ref, isVisible] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  })

  return (
    <Wrapper ref={ref}>
      <Video source={durable} />
      <WrapperOverlay>
        <TextWrapper className='obs' isVisible={isVisible}>
          <Title className='lacoste'>Durable Elegance</Title>
          <Text>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Text>
        </TextWrapper>
      </WrapperOverlay>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
  }
`

const WrapperOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`
const TextWrapper = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(3.2rem)')};
  will-change: transform, opacity;
  transition: ease-out 0.8s;
  width: 36vw;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${mediaQueries.tabletOnly} {
    width: 76vw;
  }

  @media ${mediaQueries.mobileOnly} {
    width: 92vw;
  }
`

const Title = styled.h2`
  font-size: clamp(5rem, 15vw, 10rem);
  font-style: italic;
  line-height: 0.8;
  color: ${colors.white};
  margin-bottom: 3.2rem;
`

const Text = styled.p`
  font-size: 1.8rem;
  color: ${colors.white};
`
