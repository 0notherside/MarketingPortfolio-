import './WaveBackground.css'

const WAVE_PATH = 'M0 90 C180 36 620 36 800 90 C980 144 1420 144 1600 90'
const OFFSETS = [0, 1600, 3200, 4800]

function SineLayer({
  className,
  reverse = false,
  duration = '28s',
  delay = '0s',
  phaseX = '0px',
  scaleY = 1,
  shiftY = '0px',
  height = '220px',
  opacity = 0.9,
  glow = 1,
}) {
  return (
    <div
      className={`wave-bg__sine ${className}`}
      style={{
        '--wave-duration': duration,
        '--wave-delay': delay,
        '--wave-phase-x': phaseX,
        '--wave-scale-y': scaleY,
        '--wave-shift-y': shiftY,
        '--wave-height': height,
        '--wave-opacity': opacity,
        '--wave-glow': glow,
      }}
    >
      <svg
        className="wave-bg__svg"
        viewBox="0 0 6400 180"
        preserveAspectRatio="none"
      >
        <g className={`wave-bg__track ${reverse ? 'wave-bg__track--reverse' : ''}`}>
          {OFFSETS.map((offset) => (
            <g key={offset} transform={`translate(${offset} 0)`}>
              <path className="wave-bg__stroke wave-bg__stroke--halo-core" d={WAVE_PATH} />
              <path className="wave-bg__stroke wave-bg__stroke--halo-far" d={WAVE_PATH} />
              <path className="wave-bg__stroke wave-bg__stroke--halo-near" d={WAVE_PATH} />
              <path className="wave-bg__stroke wave-bg__stroke--soft" d={WAVE_PATH} />
              <path className="wave-bg__stroke wave-bg__stroke--main" d={WAVE_PATH} />
              <path className="wave-bg__stroke wave-bg__stroke--shine" d={WAVE_PATH} />
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}

export default function WaveBackground() {
  return (
    <div className="wave-bg" aria-hidden>
      <SineLayer
        className="wave-bg__sine--top wave-bg__sine--variant-a"
        duration="30s"
        delay="-4.5s"
        phaseX="-120px"
        scaleY={0.72}
        shiftY="-12px"
        height="190px"
        opacity={0.95}
        glow={0.75}
      />
      <SineLayer
        className="wave-bg__sine--top wave-bg__sine--variant-b"
        duration="44s"
        delay="-17.8s"
        phaseX="210px"
        scaleY={0.48}
        shiftY="18px"
        height="160px"
        opacity={0.62}
        glow={0.5}
      />

      <SineLayer
        className="wave-bg__sine--bottom wave-bg__sine--variant-c"
        reverse
        duration="33s"
        delay="-9.6s"
        phaseX="-90px"
        scaleY={0.78}
        shiftY="8px"
        height="185px"
        opacity={0.78}
        glow={0.62}
      />
      <SineLayer
        className="wave-bg__sine--bottom wave-bg__sine--variant-d"
        reverse
        duration="52s"
        delay="-24.2s"
        phaseX="260px"
        scaleY={0.43}
        shiftY="-16px"
        height="150px"
        opacity={0.54}
        glow={0.38}
      />

      <div className="wave-bg__particles">
        {Array.from({ length: 44 }).map((_, i) => (
          <div
            key={i}
            className="wave-bg__particle"
            style={{
              '--i': i,
              left: `${(i * 7 + 3) % 100}%`,
              top: `${(i * 11 + 5) % 100}%`,
              animationDelay: `${(i * 0.4) % 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
