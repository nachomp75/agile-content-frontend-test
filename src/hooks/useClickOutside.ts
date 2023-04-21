import { useEffect, useRef } from 'react'

export const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClick = ({ target }: MouseEvent) => {
      if (!ref.current?.contains(target as Node)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [ref])

  return ref
}
