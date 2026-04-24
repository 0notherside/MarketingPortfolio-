import { useEffect, useRef, useState } from 'react'

export default function BackgroundMusic() {
  const MAX_VOLUME = 0.18
  const audioRef = useRef(null)
  const startedRef = useRef(false)
  const [volumeLevel, setVolumeLevel] = useState(0.55)
  const [isMuted, setIsMuted] = useState(false)
  const assetBase = import.meta.env.BASE_URL

  const tryStart = () => {
    const audio = audioRef.current
    if (!audio || startedRef.current) return Promise.resolve(false)
    audio.volume = isMuted ? 0 : MAX_VOLUME * volumeLevel
    return audio.play()
      .then(() => {
        startedRef.current = true
        return true
      })
      .catch(() => false)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.loop = true
    const delayMs = 1000
    const timeoutId = setTimeout(() => tryStart(), delayMs)
    const onInteraction = () => {
      tryStart().then((didStart) => {
        if (!didStart) return
        document.removeEventListener('click', onInteraction)
        document.removeEventListener('keydown', onInteraction)
        document.removeEventListener('touchstart', onInteraction)
      })
    }
    document.addEventListener('click', onInteraction)
    document.addEventListener('keydown', onInteraction)
    document.addEventListener('touchstart', onInteraction)
    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('click', onInteraction)
      document.removeEventListener('keydown', onInteraction)
      document.removeEventListener('touchstart', onInteraction)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = isMuted ? 0 : MAX_VOLUME * volumeLevel
  }, [volumeLevel, isMuted])

  const handleVolumeChange = (event) => {
    const nextLevel = Number(event.target.value)
    setVolumeLevel(nextLevel)
  }

  return (
    <>
      <div className="music-volume" aria-label="Background music volume control">
        <span className="music-volume__icons" aria-hidden>△ ○ × □</span>
        <label htmlFor="music-volume-range" className="music-volume__label">
          AMBIENT VOL
        </label>
        <input
          id="music-volume-range"
          className="music-volume__range"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volumeLevel}
          onChange={handleVolumeChange}
          disabled={isMuted}
          aria-label="Adjust background music volume"
        />
      </div>
      <button
        type="button"
        className={`music-mobile-toggle ${isMuted ? 'is-muted' : ''}`}
        onClick={() => setIsMuted((prev) => !prev)}
        aria-label={isMuted ? 'Turn background music on' : 'Turn background music off'}
        title={isMuted ? 'Music On' : 'Music Off'}
      >
        ♫
      </button>
      <audio ref={audioRef} src={`${assetBase}bg-music.mp3`} preload="auto" loop aria-hidden />
    </>
  )
}
