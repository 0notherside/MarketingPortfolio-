export default function Hero({ className = '' }) {
  return (
    <div className={`hero ${className}`.trim()}>
      <div className="hero-platform" aria-hidden />
      <div className="hero-figure">
        <span className="hero-placeholder">Your photo or avatar</span>
      </div>
    </div>
  )
}
