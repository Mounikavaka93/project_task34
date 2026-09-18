let lenisInstance = null

export const setLenis = (instance) => {
  lenisInstance = instance
}

export const getLenis = () => lenisInstance

export const smoothScrollTo = (target = 0, options = {}) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { duration: 1.15, ...options })
    return
  }

  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
    return
  }

  target?.scrollIntoView?.({ behavior: 'smooth', block: 'start' })
}
