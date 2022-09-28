import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import mediaQueries from '../utils/mediaQueries'
import Sticky from '../components/tracksuits/Sticky'
import jogger from '../medias/images/jogger.jpg'
import sport from '../medias/images/sport.jpg'
import paris from '../medias/images/paris.jpg'
import main from '../medias/images/main.jpg'
import men from '../medias/images/men.jpg'
import history from '../medias/images/history.jpg'
import colors from '../utils/colors'
import useObserver from '../hooks/useObserver'
import Image from '../components/medias/Image'
import { useScroll2 } from '../hooks/useScroll2'
import { useScroll } from '../hooks/useScroll'

function Tracksuits({ setDarkTheme }) {
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

  useEffect(() => setDarkTheme(false))

  const [pageTheme, setpageTheme] = useState('#000000')

  useEffect(() => {
    isVisible1 || isVisible2 || isVisible3 ? setpageTheme('#ffffff') : setpageTheme('#000000')
  }, [isVisible1, isVisible2, isVisible3])

  const [visibleCat, setVisibleCat] = useState(null)
  const [offset, setOffset] = useState(0)

  const cats = [
    { title: 'The Paris', ref1: tab1, ref2: one, back: paris },
    { title: 'The Sport', ref1: tab2, ref2: two, back: sport },
    { title: 'The Jogger', ref1: tab3, ref2: three, back: jogger },
    { title: 'History', ref1: tab4, ref2: four, back: history },
  ]

  useEffect(() => setOffset(nav.current.offsetTop - 113), [])

  const scrollDisplay2 = useScroll2(offset)
  const scrollDisplay = useScroll(60)

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
    <Container back={pageTheme}>
      <Intro back={main}>
        <InnerBack>
          <Image src={main} alt={main} ratio='60%' gradient2 />
        </InnerBack>
        <Header>
          <p className='title mt-m'>French elegance in movement</p>
          <MainTitle className='title lacoste'>Lacoste Tracksuits</MainTitle>
          <Image src={men} alt={men} ratio='125%' />
        </Header>
      </Intro>
      <Nav ref={nav} scrollDisplay2={scrollDisplay2} stickyLevel={scrollDisplay}>
        {cats.map((cat, id) => (
          <Link
            key={id}
            ref={cat.ref1}
            scrollDisplay2={scrollDisplay2}
            opacit={visibleCat === id + 1}
            className='lacoste light subtitle'
            back={cat.back}
            onClick={() => handleClick(cat.ref2)}
          >
            {cat.title}
          </Link>
        ))}
      </Nav>

      {cats.slice(0, 3).map((cat, id) => (
        <Sticky
          key={id}
          reference={cat.ref2}
          title={cat.title}
          source={cat.back}
          reverse={id % 2}
        />
      ))}
      <Sticky
        reference={cats[3].ref2}
        title={cats[3].title}
        source={cats[3].back}
        reverse
        withoutgrid
        color={!isVisible4 ? colors.codegray : colors.white}
      />
    </Container>
  )
}

export default Tracksuits

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: ${({ back }) => back};
  transition: ease 0.4s;
`

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const InnerBack = styled.div`
  width: 100%;
  height: 0;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8vw;
  flex-direction: column;
  color: ${colors.codegray};
  margin-bottom: 12vw;
  padding: 0 32vw;
  color: ${colors.white};
  z-index: 1;

  @media ${mediaQueries.mobileOnly} {
    padding: 0 4vw;
  }
`

const MainTitle = styled.h2`
  font-size: clamp(5rem, 15vw, 10rem);
  line-height: 0.9;
  margin-bottom: 4vw;
`

const Nav = styled.nav`
  position: sticky;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1000;
  top: ${({ stickyLevel }) => (stickyLevel ? '11.3rem' : '0rem')};
  padding: 0.8rem 4vw;
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  background: ${({ scrollDisplay2 }) => (scrollDisplay2 ? 'transparent' : colors.white)};
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  transition: ease 0.4s;

  ::-webkit-scrollbar {
    display: none;
  }
  @media ${mediaQueries.mobileOnly} {
    top: ${({ stickyLevel }) => (stickyLevel ? '10.3rem' : '0rem')};
  }
`
const Link = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  border-radius: 0.8rem;
  opacity: ${({ opacit, scrollDisplay2 }) => (opacit ? '1' : scrollDisplay2 ? '1' : '0.3')};
  width: calc(100% / 3);
  min-width: 18rem;
  height: ${({ scrollDisplay2 }) => (scrollDisplay2 ? '32rem' : '6rem')};
  padding: 0.8rem;
  clip-path: inset(0);
  overflow: hidden;
  margin-right: 0.8rem;
  scroll-snap-align: start;
  scroll-margin-left: 0.8rem;
  scroll-margin-right: 0.8rem;
  transition: ease 0.4s;

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
