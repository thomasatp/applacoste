import { useState, useEffect } from 'react'

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollDisplay, setScrollDisplay] = useState(true)

  function handleScroll() {
    const position = window.pageYOffset
    setScrollPosition(position)
    position > 60 && scrollPosition < position ? setScrollDisplay(false) : setScrollDisplay(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return scrollDisplay
}
