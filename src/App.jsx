import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import './sass/App.scss'
import Header from './components/header/Header'
import mediaQueries from './utils/mediaQueries'
import { useScroll } from './hooks/useScroll'
import Plp from './pages/Plp'
import Tracksuits from './pages/Tracksuits'
import Starter from './components/starter/Starter'

function App() {
  const savedTheme = localStorage.getItem('darkTheme')
  const [darkTheme, setDarkTheme] = useState(savedTheme ? JSON.parse(savedTheme) : [])
  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme))
  }, [darkTheme])

  const scrollDisplay = useScroll(60)

  return (
    <div className='App'>
      <Header scrollDisplay={scrollDisplay} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <MainContainer darkTheme={darkTheme}>
        <Routes>
          <Route exact path='/' element={<Starter />} />
          <Route path='/plp' element={<Plp />} />
          <Route path='/tracksuits' element={<Tracksuits setDarkTheme={setDarkTheme} />} />
        </Routes>
      </MainContainer>
    </div>
  )
}

export default App

const MainContainer = styled.div`
  margin-top: ${({ darkTheme }) => (darkTheme ? '0' : '11.3rem')};
  min-height: 100vh;

  @media ${mediaQueries.tabletOnly} {
    margin-top: ${({ darkTheme }) => (darkTheme ? '0' : '6rem')};
  }

  @media ${mediaQueries.mobileOnly} {
    margin-top: ${({ darkTheme }) => (darkTheme ? '0' : '10.4rem')};
  }
`
