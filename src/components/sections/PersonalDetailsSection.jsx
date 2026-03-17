import SectionPanel from '../SectionPanel'

const DEFAULT_DETAILS = [
  { label: 'Email', value: 'ivankrylov.mailbox2@gmail.com', link: 'mailto:ivankrylov.mailbox2@gmail.com' },
  { label: 'Phone', value: '+44(0)7765015306', link: 'tel:+447765015306' },
  { label: 'Location', value: 'Slough, England' },
  { label: 'LinkedIn', value: 'linkedin.com/in/ivan-krylov1', link: 'https://www.linkedin.com/in/ivan-krylov1/' },
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
    </SectionPanel>
  )
}
