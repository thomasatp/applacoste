import React from 'react'
import styled from 'styled-components'

function Video({ source, gradient }) {
  return (
    <VideoWrapper gradient={gradient}>
      <VideoItem
        preload='auto'
        autoStart
        autoPlay
        playsInline
        loop
        muted
        src={source}
        type='video/mp4'
      />
    </VideoWrapper>
  )
}

const VideoWrapper = styled.div`
  display: flex;
  width: 100%;
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
      to top,
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
  }`}
`

const VideoItem = styled.video`
  object-fit: cover;
  width: 100%;
  position: relative;
`

export default Video
