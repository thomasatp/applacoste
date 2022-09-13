import { useRef, useState, useEffect } from 'react'

function useObserver(options) {
  const contentRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  function callback(entries) {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    contentRef.current && observer.observe(contentRef.current)
    return () => {
      contentRef.current && observer.unobserve(contentRef.current)
    }
  }, [contentRef, options])

  return [contentRef, isVisible]
}

export default useObserver
