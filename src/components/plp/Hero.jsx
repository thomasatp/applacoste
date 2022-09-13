import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import starter from '../../medias/videos/starter.mp4'
import Video from '../medias/Video'
import mediaQueries from '../../utils/mediaQueries'

function Hero({ title, desc }) {
  return (
    <Container>
      <Video source={starter} gradient />
      <TextContainer>
        <h1 className='headline'>{title}</h1>
        <p className='body mt-sm'>{desc}</p>
      </TextContainer>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  height: 20vw;
  min-height: 250px;
  overflow: hidden;
  position: relative;
`

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 4vw;
  color: ${colors.white};
  width: 40%;

  @media ${mediaQueries.mobileAndTablet} {
    width: 100%;
  }
`

export default Hero
