import BackButton from './BackButton'

export default function SectionPanel({ title, titleId, onBack, children, ...props }) {
  return (
    <div
      className="section-panel"
      role="dialog"
      aria-labelledby={titleId}
      {...props}
    >
      <BackButton onBack={onBack} />
      <h1 id={titleId}>{title}</h1>
      <div className="content">{children}</div>
    </div>
  )
}
