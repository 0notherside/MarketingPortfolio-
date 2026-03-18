export default function Controller() {
  const assetBase = import.meta.env.BASE_URL

  return (
    <div className="controller" aria-hidden>
      <div className="controller__shade" aria-hidden />
      <img
        src={`${assetBase}controller.png`}
        alt=""
        className="controller__img"
      />
    </div>
  )
}
