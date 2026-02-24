import SectionPanel from '../SectionPanel'
import DownloadButton from '../DownloadButton'

export default function CVSection({ onBack, pdfUrl = '/cv.pdf' }) {
  return (
    <SectionPanel title="CV" titleId="cv-title" onBack={onBack}>
      <p>
        Full curriculum vitae with experience, education, and skills. Download the PDF version below.
      </p>
      <div className="download-row">
        <DownloadButton href={pdfUrl}>Download CV (PDF)</DownloadButton>
      </div>
      <p className="section-hint">
        Place your <code>cv.pdf</code> in the <code>public/</code> folder so the link works.
      </p>
    </SectionPanel>
  )
}
