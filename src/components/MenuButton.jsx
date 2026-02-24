export default function MenuButton({ item, isActive, onClick, tilt }) {
  return (
    <button
      type="button"
      className={`menu-btn menu-btn--tilt-${tilt || 'none'} ${isActive ? 'active' : ''}`}
      onClick={() => onClick(item.id)}
      aria-pressed={isActive}
      aria-label={item.label}
    >
      <span aria-hidden>{item.icon}</span>
      {item.label}
    </button>
  )
}
