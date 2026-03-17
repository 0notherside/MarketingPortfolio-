import { useEffect, useRef } from 'react'

export default function BackgroundMusic() {
  const audioRef = useRef(null)
  const startedRef = useRef(false)

  const tryStart = () => {
    const audio = audioRef.current
    if (!audio || startedRef.current) return
    startedRef.current = true
    audio.volume = 0.12
    audio.play().catch(() => {})
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.loop = true
    const delayMs = 1000
    const timeoutId = setTimeout(() => tryStart(), delayMs)
    const onInteraction = () => {
      tryStart()
      document.removeEventListener('click', onInteraction)
      document.removeEventListener('keydown', onInteraction)
      document.removeEventListener('touchstart', onInteraction)
    }
    document.addEventListener('click', onInteraction, { once: true })
    document.addEventListener('keydown', onInteraction, { once: true })
    document.addEventListener('touchstart', onInteraction, { once: true })
    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('click', onInteraction)
      document.removeEventListener('keydown', onInteraction)
      document.removeEventListener('touchstart', onInteraction)
    }
  }, [])

  return (
    <audio ref={audioRef} src="/bg-music.mp3" preload="auto" loop aria-hidden />
  )
}
