import SectionPanel from '../SectionPanel'
import DownloadButton from '../DownloadButton'

export default function CVSection({ onBack, pdfUrl = `${import.meta.env.BASE_URL}cv.pdf` }) {
  return (
    <SectionPanel title="CV" titleId="cv-title" onBack={onBack}>
      <div className="download-row">
        <DownloadButton href={pdfUrl}>Download CV (PDF)</DownloadButton>
      </div>
    </SectionPanel>
  )
}
