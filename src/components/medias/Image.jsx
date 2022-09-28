import React from 'react'
import styled from 'styled-components'

function Image({ id, src, alt, ratio, gradient, gradient2 }) {
  return (
    <ImageWrapper id={id} ratio={ratio} gradient={gradient} gradient2={gradient2}>
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

  ${({ gradient }) =>
    gradient &&
    `::after {
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
      hsla(0, 0%, 0%, 1) 100%
    );
  }`}

  ${({ gradient2 }) =>
    gradient2 &&
    `::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      hsl(0, 0%, 0%) 0%,
      hsla(0, 0%, 0%, 0.987) 8.1%,
      hsla(0, 0%, 0%, 0.951) 15.5%,
      hsla(0, 0%, 0%, 0.896) 22.5%,
      hsla(0, 0%, 0%, 0.825) 29%,
      hsla(0, 0%, 0%, 0.741) 35.3%,
      hsla(0, 0%, 0%, 0.648) 41.2%,
      hsla(0, 0%, 0%, 0.55) 47.1%,
      hsla(0, 0%, 0%, 0.45) 52.9%,
      hsla(0, 0%, 0%, 0.352) 58.8%,
      hsla(0, 0%, 0%, 0.259) 64.7%,
      hsla(0, 0%, 0%, 0.175) 71%,
      hsla(0, 0%, 0%, 0.104) 77.5%,
      hsla(0, 0%, 0%, 0.049) 84.5%,
      hsla(0, 0%, 0%, 0.013) 91.9%,
      hsla(0, 0%, 0%, 0) 100%
    );
  }`}
`

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
`

export default Image
