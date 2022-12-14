import { useState, useEffect } from 'react'

export function useScroll(val) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollDisplay, setScrollDisplay] = useState(true)

  function handleScroll() {
    const position = window.pageYOffset
    setScrollPosition(position)
    position > val && scrollPosition < position ? setScrollDisplay(false) : setScrollDisplay(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return scrollDisplay
}
