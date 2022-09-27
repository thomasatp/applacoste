import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import mediaQueries from '../utils/mediaQueries'
import Sticky from '../components/tracksuits/Sticky'
import jogger from '../medias/images/jogger.jpg'
import sport from '../medias/images/sport.jpg'
import paris from '../medias/images/paris.jpg'
import main from '../medias/images/main.jpg'
import history from '../medias/images/history.jpg'
import colors from '../utils/colors'
import useObserver from '../hooks/useObserver'
import Image from '../components/medias/Image'
import { useScroll } from '../hooks/useScroll2'

function Tracksuits() {
  const nav = useRef()
  const tab1 = useRef()
  const tab2 = useRef()
  const tab3 = useRef()
  const tab4 = useRef()
  const [one, isVisible1] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0,
  })
  const [two, isVisible2] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0,
  })
  const [three, isVisible3] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0,
  })
  const [four, isVisible4] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0,
  })

  const [visibleCat, setVisibleCat] = useState(null)

  const [offset, setOffset] = useState(0)

  useEffect(() => setOffset(nav.current.offsetTop), [])

  const scrollDisplay = useScroll(offset)

  const cats = { one: 'The Jogger', two: 'The Sport', three: 'The Paris', four: 'History' }

  function handleClick(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleTab(val) {
    setTimeout(() => {
      nav.current.scrollTo({ left: val, behavior: 'smooth' })
    }, 300)
  }

  useEffect(() => {
    isVisible1
      ? setVisibleCat(1)
      : isVisible2
      ? setVisibleCat(2)
      : isVisible3
      ? setVisibleCat(3)
      : isVisible4
      ? setVisibleCat(4)
      : setVisibleCat(null)
  }, [isVisible1, isVisible2, isVisible3, isVisible4])

  useEffect(() => {
    visibleCat === 1
      ? handleTab(0)
      : visibleCat === 2
      ? handleTab(188)
      : visibleCat === 3
      ? handleTab(376)
      : visibleCat === 4
      ? handleTab(564)
      : handleTab(null)
  }, [visibleCat])

  return (
    <>
      <Background>
        <InnerBackground>
          <Image src={main} alt={main} />
        </InnerBackground>
      </Background>
      <Intro>
        <Header>
          <MainTitle className='title lacoste' style={{ width: '100%' }}>
            THE LACOSTE TRACKSUIT.
          </MainTitle>
          <p className='subtitle mt-m'>
            At sit viverra dictumst tortor scelerisque blandit semper. Metus euismod ut a facilisis
            turpis. In auctor massa tortor hendrerit consectetur tellus lacus. At dolor eleifend at
            justo habitasse nec dapibus id tristique.{' '}
          </p>
        </Header>
      </Intro>
      <Nav ref={nav} scrollDisplay={scrollDisplay}>
        <Link
          ref={tab1}
          scrollDisplay={scrollDisplay}
          opacit={visibleCat === 1}
          className='lacoste light subtitle'
          back={jogger}
          onClick={() => handleClick(one)}
        >
          {cats.one}
        </Link>
        <Link
          ref={tab2}
          scrollDisplay={scrollDisplay}
          opacit={visibleCat === 2}
          className='lacoste light subtitle'
          back={sport}
          onClick={() => handleClick(two)}
        >
          {cats.two}
        </Link>
        <Link
          ref={tab3}
          scrollDisplay={scrollDisplay}
          opacit={visibleCat === 3}
          className='lacoste light subtitle'
          back={paris}
          onClick={() => handleClick(three)}
        >
          {cats.three}
        </Link>
        <Link
          ref={tab4}
          scrollDisplay={scrollDisplay}
          opacit={visibleCat === 4}
          className='lacoste light subtitle'
          back={history}
          onClick={() => handleClick(four)}
        >
          {cats.four}
        </Link>
      </Nav>
      <Sticky reference={one} title={cats.one} source={jogger} />
      <Sticky reference={two} title={cats.two} source={sport} reverse />
      <Sticky reference={three} title={cats.three} source={paris} />
      <Sticky reference={four} title={cats.four} source={history} reverse />
    </>
  )
}

export default Tracksuits

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 0;
`

const InnerBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: -1;

  ::after {
    content: '';
    position: absolute;
    top: 0;
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
  }
`

const Intro = styled.div`
  display: flex;
  margin-top: 22rem;
`
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${colors.codegray};
  margin-bottom: 4vw;
  padding: 0 32vw;
  color: ${colors.white};

  @media ${mediaQueries.mobileOnly} {
    padding: 0 4vw;
  }
`

const MainTitle = styled.h2`
  font-size: clamp(5rem, 15vw, 10rem);
  line-height: 1;
`

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
  background: ${({ scrollDisplay }) => (scrollDisplay ? 'transparent' : colors.white)};
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  transition: ease 0.4s;

  ::-webkit-scrollbar {
    display: none;
  }
`
const Link = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  border-radius: 0.8rem;
  opacity: ${({ opacit, scrollDisplay }) => (opacit ? '1' : scrollDisplay ? '1' : '0.3')};
  width: calc(100% / 3);
  min-width: 18rem;
  height: ${({ scrollDisplay }) => (scrollDisplay ? '32vw' : '6rem')};
  padding: 0.8rem;
  clip-path: inset(0);
  overflow: hidden;
  margin-right: 0.8rem;
  scroll-snap-align: start;
  scroll-margin-left: 0.8rem;
  scroll-margin-right: 0.8rem;
  transition: ease 0.4s;

  @media ${mediaQueries.mobileOnly} {
    height: ${({ scrollDisplay }) => (scrollDisplay ? '48vw' : '6rem')};
  }

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
    filter: brightness(0.7);
  }
`
