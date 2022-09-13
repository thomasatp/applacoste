import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import SwitchTheme from './SwitchTheme'
import Account from '../../medias/icons/Account'
import Basket from '../../medias/icons/Basket'
import ChevronDown from '../../medias/icons/ChevronDown'
import Cross from '../../medias/icons/Cross'
import Heart from '../../medias/icons/Heart'
import Pin from '../../medias/icons/Pin'
import Search from '../../medias/icons/Search'

import colors from '../../utils/colors'
import mediaQueries from '../../utils/mediaQueries'
import { Link } from 'react-router-dom'

function Header({ darkTheme, setDarkTheme, scrollDisplay }) {
  const [open, setOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [focusSearch, setFocusSearch] = useState(false)
  const iconColor = darkTheme ? colors.white : colors.codegray
  const categories = [
    'New in',
    'Men',
    'Women',
    'Kids',
    'Sale',
    'Polo',
    'Collection',
    'Customise',
    'Lacoste inside',
  ]

  function handleToggle() {
    setIsDarkTheme(darkTheme)
    if (!open && !isDarkTheme) {
      setOpen(true)
      setDarkTheme(false)
    } else if (open && isDarkTheme) {
      setOpen(false)
      setDarkTheme(true)
    } else {
      setOpen(false)
      setDarkTheme(false)
    }
  }

  function handleFocus() {
    setIsDarkTheme(darkTheme)
    if (!focusSearch && !isDarkTheme) {
      setDarkTheme(false)
      setFocusSearch(true)
    } else if (focusSearch && isDarkTheme) {
      setDarkTheme(true)
      setFocusSearch(false)
    } else {
      setFocusSearch(false)
      setDarkTheme(false)
    }
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <Wrapper darkTheme={darkTheme}>
      <Head>
        <Link to={process.env.PUBLIC_URL + '/'}>
          <Logo darkTheme={darkTheme} />
        </Link>
        <SearchBar scrollDisplay={scrollDisplay} open={open} darkTheme={darkTheme}>
          <input type='text' placeholder='Search' onFocus={handleFocus} onBlur={handleFocus} />
          <Search className='searchicon' color={iconColor} />
          {focusSearch && (
            <CloseSearch type='button' onClick={handleFocus}>
              <Cross color={iconColor} />
            </CloseSearch>
          )}
        </SearchBar>
        <IconWrapper>
          <SwitchTheme
            onClick={() => setDarkTheme(!darkTheme)}
            darkTheme={darkTheme}
            color={iconColor}
          />
          <Pin color={iconColor} />
          <Heart color={iconColor} />
          <Account color={iconColor} />
          <Basket color={iconColor} />
          <ToggleMenu open={open} onClick={handleToggle} darkTheme={darkTheme}>
            <span />
          </ToggleMenu>
        </IconWrapper>
      </Head>
      <Categories scrollDisplay={scrollDisplay} open={open} darkTheme={darkTheme}>
        <ul>
          {categories.map(category => (
            <li key={category} id={category}>
              <Link onClick={() => setOpen(false)} to={process.env.PUBLIC_URL + '/plp'}>
                {category}
                <ChevronDown color={iconColor} />
              </Link>
            </li>
          ))}
        </ul>
      </Categories>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  z-index: 1000;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem 4vw;
  background: ${({ darkTheme }) =>
    darkTheme
      ? `linear-gradient(
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
)`
      : colors.white};
`

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${mediaQueries.mobileOnly} {
    flex-wrap: wrap;
  }
`

const SearchBar = styled.form`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  transition: ease 0.3s;

  .searchicon {
    position: absolute;
    top: 1rem;
    left: 2.4rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 6rem;
    outline: none;
    border: none;
    border-radius: 2.2rem;
    font-size: 1.6rem;
    background: ${({ darkTheme }) => (darkTheme ? 'transparent' : colors.wildsand)};
    color: ${({ darkTheme }) => (darkTheme ? colors.white : colors.codegray)};
    border: 1px solid ${({ darkTheme }) => (darkTheme ? colors.white30 : 'transparent')};
    transition: ease 0.3s;
    backdrop-filter: blur(0.8rem);

    ::placeholder {
      font-size: 1.4rem;
      color: ${({ darkTheme }) => (darkTheme ? colors.white : colors.boulder)};
    }
  }

  @media ${mediaQueries.mobileOnly} {
    height: ${({ scrollDisplay, open }) => (open ? '4rem' : scrollDisplay ? '4rem' : 0)};
    overflow: hidden;
    order: 3;
    width: 100%;
    margin-top: ${({ scrollDisplay, open }) => (open ? '.4rem' : scrollDisplay ? '.4rem' : 0)};

    input {
      opacity: ${({ scrollDisplay, open }) => (open ? '1' : scrollDisplay ? '1' : 0)};
    }
  }
`

const CloseSearch = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  padding: 0.8rem;
  margin-left: 0.8rem;
  background: ${colors.wildsand};
  border-radius: 2.2rem;
  cursor: pointer;
`

const IconWrapper = styled.div`
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  margin-left: 0.8rem;
  padding: 1rem 0;

  svg {
    width: 1em;
    height: 1em;
    margin-left: 1.6rem;
  }
`

const ToggleMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.5rem 0.2rem 0.3rem;
  margin-left: 1.6rem;
  position: relative;
  cursor: pointer;

  span {
    position: relative;
    width: 2rem;
    height: 0.1rem;
    transform-origin: 50%;
    transition: transform ease 0.3s;
    will-change: transform;
    background: ${({ darkTheme }) => (darkTheme ? colors.white : colors.codegray)};
    transform: ${({ open }) => (open ? 'rotateZ(-45deg)' : 'rotateZ(0)')};

    ::before,
    ::after {
      content: '';
      position: absolute;
      width: 2rem;
      height: 0.1rem;
      transition: transform ease 0.3s;
      will-change: transform;
      transform-origin: 50%;
      background: ${({ darkTheme }) => (darkTheme ? colors.white : colors.codegray)};
    }

    ::before {
      transform: ${({ open }) => (open ? 'translateY(-0.8rem)' : 'rotateZ(0)')};
      top: 0.8rem;
    }
    ::after {
      transform: ${({ open }) => (open ? 'translateY(0.8rem) rotateZ(90deg)' : 'rotateZ(0)')};
      bottom: 0.8rem;
    }
  }
  @media ${mediaQueries.desktopOnly} {
    display: none;
  }
`

const Categories = styled.nav`
  display: flex;
  justify-content: center;
  transition: ease 0.3s;

  @media ${mediaQueries.desktopOnly} {
    height: ${({ scrollDisplay }) => (scrollDisplay ? '5.3rem' : '0')};
    overflow: hidden;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 1.6rem 0 0;
    font-size: 1.4rem;
    pointer-events: none;
    color: ${({ darkTheme }) => (darkTheme ? colors.white : colors.codegray)};

    li {
      position: relative;
      padding: 0.8rem 2.4rem;
      pointer-events: auto;
      cursor: pointer;

      svg {
        position: absolute;
        width: 0.9em;
        height: 0.9em;
        top: 1.3rem;
        right: 0;
      }
    }
  }
  @media ${mediaQueries.mobileAndTablet} {
    ul {
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 2.4rem;
      width: 100%;
      font-size: 2.2rem;
      li {
        padding: 0.8rem 0;
        pointer-events: auto;
        display: ${({ open }) => (open ? 'flex' : 'none')};
        ${({ open }) => open && 'display: none '}

        svg {
          width: 2.4rem;
          height: 2.4rem;
          transform: rotateZ(-90deg);
        }
      }
    }
    height: ${({ open }) => (open ? '100vh' : '0')};
    opacity: ${({ open }) => (open ? '1' : '0')};
  }
`
export default Header
