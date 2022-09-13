import React from 'react'
import styled from 'styled-components'

function Image({ src, alt, ratio }) {
  return (
    <ImageWrapper ratio={ratio}>
      <ImageItem src={src} alt={alt} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 0;
  padding-bottom: ${({ ratio }) => ratio};
`

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
`

export default Image
