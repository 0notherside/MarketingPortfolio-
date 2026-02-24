import SectionPanel from '../SectionPanel'

const DEFAULT_DETAILS = [
  { label: 'Email', value: 'your.email@example.com' },
  { label: 'Phone', value: '+1 234 567 8900' },
  { label: 'Location', value: 'City, Country' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', link: 'https://linkedin.com' },
]

export default function PersonalDetailsSection({ onBack, details = DEFAULT_DETAILS }) {
  return (
    <SectionPanel title="Personal Details" titleId="details-title" onBack={onBack}>
      <ul className="details-list">
        {details.map(({ label, value, link }) => (
          <li key={label}>
            <span className="label">{label}</span>
            <span className="value">
              {link ? <a href={link}>{value}</a> : value}
            </span>
          </li>
        ))}
      </ul>
      <p className="section-hint">
        Edit the <code>details</code> prop in <code>src/App.jsx</code> or this file to add your real contact info.
      </p>
    </SectionPanel>
  )
}
