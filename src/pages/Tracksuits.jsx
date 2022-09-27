import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import mediaQueries from '../utils/mediaQueries'
import Sticky from '../components/tracksuits/Sticky'
import jogger from '../medias/images/jogger.jpg'
import sport from '../medias/images/sport.jpg'
import paris from '../medias/images/paris.jpg'
import colors from '../utils/colors'
import useObserver from '../hooks/useObserver'

function Tracksuits() {
  const nav = useRef()
  const tab1 = useRef()
  const tab2 = useRef()
  const tab3 = useRef()
  const [one, isVisible1] = useObserver({
    root: null,
    rootMargin: '-50px',
    threshold: 0,
  })
  const [two, isVisible2] = useObserver({
    root: null,
    rootMargin: '-50px',
    threshold: 0,
  })
  const [three, isVisible3] = useObserver({
    root: null,
    rootMargin: '-50px',
    threshold: 0,
  })

  const [visibleCat, setVisibleCat] = useState(null)

  useEffect(() => {
    isVisible1
      ? setVisibleCat(1)
      : isVisible2
      ? setVisibleCat(2)
      : isVisible3
      ? setVisibleCat(3)
      : setVisibleCat(null)
  }, [isVisible1, isVisible2, isVisible3, visibleCat])

  const cats = { one: 'The Jogger', two: 'The Sport', three: 'The Paris' }

  function handleClick(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleTab(val) {
    nav.current.scrollTo({ left: val, behavior: 'smooth' })
  }

  useEffect(() => {
    isVisible1
      ? handleTab(0)
      : isVisible2
      ? handleTab(188)
      : isVisible3
      ? handleTab(376)
      : setVisibleCat(null)
  }, [isVisible1, isVisible2, isVisible3])

  return (
    <>
      <Nav ref={nav}>
        <Link
          ref={tab1}
          opacity={visibleCat === 1}
          className='lacoste light subtitle'
          back={jogger}
          onClick={() => handleClick(one)}
        >
          {cats.one}
        </Link>
        <Link
          ref={tab2}
          opacity={visibleCat === 2}
          className='lacoste light subtitle'
          back={sport}
          onClick={() => handleClick(two)}
        >
          {cats.two}
        </Link>
        <Link
          ref={tab3}
          opacity={visibleCat === 3}
          className='lacoste light subtitle'
          back={paris}
          onClick={() => handleClick(three)}
        >
          {cats.three}
        </Link>
      </Nav>
      <Sticky reference={one} title={cats.one} source={jogger} ratio={100} />
      <Sticky reference={two} title={cats.two} source={sport} reverse />
      <Sticky reference={three} title={cats.three} source={paris} />
    </>
  )
}

export default Tracksuits

const Nav = styled.nav`
  position: sticky;
  justify-content: flex-start;
  z-index: 1000;
  top: 0rem;
  padding: 1.6rem 4vw;
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  background: ${colors.white};
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;

  ::-webkit-scrollbar {
    display: none;
  }
`
const Link = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  border-radius: 0.8rem;
  opacity: ${({ opacity }) => (opacity ? '1' : '0.3')};
  width: calc(100% / 3);
  min-width: 18rem;
  height: 8rem;
  padding: 0.8rem;
  clip-path: inset(0);
  overflow: hidden;
  margin-right: 0.8rem;
  scroll-snap-align: start;
  scroll-margin-left: 0.8rem;
  scroll-margin-right: 0.8rem;

  :last-of-type {
    margin: 0;
  }

  ::before {
    position: absolute;
    z-index: -1;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ back }) => back && `url('${back}')`};
    background-blend-mode: difference;
    background-position: center center;
    background-size: cover;
    background-repeat: none;
    filter: brightness(0.6);
  }
`
