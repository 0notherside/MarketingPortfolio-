import { useEffect, useRef } from 'react'

function playTrophySound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const play = (freq, start, duration, vol = 0.25) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.value = freq
      osc.type = 'sine'
      gain.gain.setValueAtTime(0, start)
      gain.gain.linearRampToValueAtTime(vol, start + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.01, start + duration)
      osc.start(start)
      osc.stop(start + duration)
    }
    play(523.25, 0, 0.12)
    play(659.25, 0.08, 0.18, 0.2)
    play(783.99, 0.18, 0.25, 0.15)
  } catch (_) {}
}

export default function TrophyToast() {
  const soundPlayed = useRef(false)

  useEffect(() => {
    if (soundPlayed.current) return
    soundPlayed.current = true
    playTrophySound()
  }, [])

  return (
    <div className="trophy-toast" role="status">
      <img
        src="/trophy-toast.png"
        alt="You have earned a trophy. Fashion Junkie"
        className="trophy-toast__img"
      />
    </div>
  )
}
