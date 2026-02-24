import MenuButton from './MenuButton'

export default function MenuBar({ items, activeSectionId, onSelect, center }) {
  const mid = Math.ceil(items.length / 2)
  const leftItems = items.slice(0, mid)
  const rightItems = items.slice(mid)

  return (
    <div className="menu-layout">
      <div className="menu-bar menu-bar__column--left">
        {leftItems.map((item) => (
          <MenuButton
            key={item.id}
            item={item}
            isActive={activeSectionId === item.id}
            onClick={onSelect}
            tilt="left"
          />
        ))}
      </div>
      <div className="menu-layout__center">
        {center}
      </div>
      <div className="menu-bar menu-bar__column--right">
        {rightItems.map((item) => (
          <MenuButton
            key={item.id}
            item={item}
            isActive={activeSectionId === item.id}
            onClick={onSelect}
            tilt="right"
          />
        ))}
      </div>
    </div>
  )
}
