import SectionPanel from '../SectionPanel'
import DownloadButton from '../DownloadButton'

export default function PortfolioSection({ onBack, pdfUrl = '/portfolio.pdf' }) {
  return (
    <SectionPanel title="Portfolio" titleId="portfolio-title" onBack={onBack}>
      <p>
        A selection of marketing campaigns, brand work, and creative projects. Download the full portfolio as a PDF below.
      </p>
      <div className="download-row">
        <DownloadButton href={pdfUrl}>Download Portfolio (PDF)</DownloadButton>
      </div>
      <p className="section-hint">
        Place your <code>portfolio.pdf</code> in the <code>public/</code> folder so the link works.
      </p>
    </SectionPanel>
  )
}
