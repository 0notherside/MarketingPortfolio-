export default function Hero({ className = '' }) {
  const assetBase = import.meta.env.BASE_URL

  return (
    <div className={`hero ${className}`.trim()}>
      <div className="hero-platform" aria-hidden />
      <img
        src={`${assetBase}avatar.png`}
        alt=""
        className="hero-avatar"
      />
    </div>
  )
}
