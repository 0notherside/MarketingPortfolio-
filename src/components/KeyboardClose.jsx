import { useEffect } from 'react'

export default function KeyboardClose({ onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape' || e.key === 'o' || e.key === 'O') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])
  return null
}
