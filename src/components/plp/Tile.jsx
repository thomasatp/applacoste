import React, { useState } from 'react'
import styled from 'styled-components'
import Image from '../medias/Image'
import durable from '../../medias/durable.svg'
import custo from '../../medias/custo.svg'
import colors from '../../utils/colors'
import mediaQueries from '../../utils/mediaQueries'
import Wishlist from '../../medias/icons/Wishlist'

function BottomTag({ name, src }) {
  return (
    <div className='flex align-center mr-s'>
      <p className='subcaption bold medium mr-xs'>{name}</p>
      <BottomPic src={src} alt={name} />
    </div>
  )
}

function ColorItem({ color, onClick, selected }) {
  return (
    <ColorWrapper onClick={onClick} selected={selected}>
      <ColorBullet color={color} />
    </ColorWrapper>
  )
}

function ColorSelection({ productColors, display }) {
  const [idSelected, setIdSelected] = useState(0)

  function handleId(id) {
    setIdSelected(id)
    console.log(idSelected)
  }
  return (
    <ColorSelectionWrapper display={display} className='flex align-center mt-s'>
      {productColors.map((col, id) => (
        <ColorItem
          key={id}
          color={col}
          onClick={() => handleId(id)}
          selected={idSelected === id ? true : false}
        />
      ))}
    </ColorSelectionWrapper>
  )
}

function Tile({ src, title, price, productColors, tag, productView, gridValue }) {
  const [mouseOver, setMouseOver] = useState(false)

  return (
    <Wrapper
      productView={productView}
      gridValue={gridValue}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <Image
        src={src[(productView && mouseOver) || (!productView && !mouseOver) ? 0 : 1]}
        alt={title}
        ratio='125%'
      />
      <InfoWrapper>
        <h2
          className='caption regular mt-s'
          style={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            maxLines: '2',
          }}
        >
          {title}
        </h2>
        <p className='caption regular mt-xs'>{price}</p>
        <ColorSelection display={mouseOver} productColors={productColors} />
        <div className='flex mt-s wrap'>
          <BottomTag name='Durable' src={durable} />
          <BottomTag name='Customisation' src={custo} />
        </div>
      </InfoWrapper>
      {tag && <Tag>{tag}</Tag>}
      <Wishlist color={colors.silver} />
    </Wrapper>
  )
}

const Wrapper = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${({ gridValue }) =>
    gridValue < 25
      ? 'calc(100%/6)'
      : gridValue >= 25 && gridValue < 50
      ? '20%'
      : gridValue >= 50 && gridValue < 75
      ? '25%'
      : 'calc(100%/3)'};
  padding: 0.4rem;
  margin-bottom: 3.2rem;
  cursor: pointer;

  @media ${mediaQueries.mobileOnly} {
    width: ${({ gridValue }) => (gridValue < 50 ? '50%' : '100%')};
    padding: 0.2rem;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${mediaQueries.mobileOnly} {
    padding: 0 0.8rem;
  }
`

const BottomPic = styled.img`
  width: 2rem;
  height: 2rem;
`
const Tag = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 0 0.8rem;
  background: ${colors.white};
  height: 2.2rem;
  border-radius: 1.1rem;
  border: 1px solid ${colors.codegray};
`

const ColorBullet = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.8rem;
  background: ${({ color }) => color};
  border: 1px solid ${colors.white};
`

const ColorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.9rem;
  margin-right: 0.4rem;
  border: ${({ selected }) => (selected ? `1px solid ${colors.codegray}` : 'none')};
  cursor: pointer;
`

const ColorSelectionWrapper = styled.div`
  height: 1.95rem;
  width: 100%;
  background: ${colors.white};
  @media ${mediaQueries.desktopOnly} {
    position: absolute;
    display: ${({ display }) => (display ? 'flex' : 'none')};
  }
`

export default Tile
