import React from 'react'
import styled from 'styled-components'

function Image({ id, src, alt, ratio }) {
  return (
    <ImageWrapper id={id} ratio={ratio}>
      <ImageItem src={src} alt={alt} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  min-width: 100%;
  position: relative;
  scroll-snap-align: start;
  height: ${({ ratio }) => (ratio ? 0 : '100%')};
  padding-bottom: ${({ ratio }) => ratio};

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.005) 8.1%,
      hsla(0, 0%, 0%, 0.019) 15.5%,
      hsla(0, 0%, 0%, 0.042) 22.5%,
      hsla(0, 0%, 0%, 0.07) 29%,
      hsla(0, 0%, 0%, 0.104) 35.3%,
      hsla(0, 0%, 0%, 0.141) 41.2%,
      hsla(0, 0%, 0%, 0.18) 47.1%,
      hsla(0, 0%, 0%, 0.22) 52.9%,
      hsla(0, 0%, 0%, 0.259) 58.8%,
      hsla(0, 0%, 0%, 0.296) 64.7%,
      hsla(0, 0%, 0%, 0.33) 71%,
      hsla(0, 0%, 0%, 0.358) 77.5%,
      hsla(0, 0%, 0%, 0.381) 84.5%,
      hsla(0, 0%, 0%, 0.395) 91.9%,
      hsla(0, 0%, 0%, 0.4) 100%
    );
  }
`

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
`

export default Image
