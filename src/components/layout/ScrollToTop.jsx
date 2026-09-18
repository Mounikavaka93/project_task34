import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { smoothScrollTo } from '../../lib/smoothScroll'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    smoothScrollTo(0, { immediate: true, duration: 0.7 })
  }, [pathname])

  return null
}
