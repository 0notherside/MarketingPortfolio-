export default function Hero({ className = '' }) {
  return (
    <div className={`hero ${className}`.trim()}>
      <div className="hero-platform" aria-hidden />
      <img
        src="/avatar.png"
        alt=""
        className="hero-avatar"
      />
    </div>
  )
}
