import SectionPanel from '../SectionPanel'

export default function PortfolioSection({ onBack }) {
  return (
    <SectionPanel title="Portfolio" titleId="portfolio-title" onBack={onBack}>
      <div className="portfolio-list">
        <a
          href="/portfolio-strategy.pdf"
          download="Portfolio-Strategy.pdf"
          className="portfolio-card portfolio-card--strategy"
          aria-label="Download Portfolio Strategy (PDF)"
        >
          <div className="portfolio-card__text">
            <h2>Portfolio Strategy</h2>
            <p>Download strategic marketing campaigns and case studies.</p>
          </div>
        </a>

        <a
          href="/portfolio-assets.pdf"
          download="Portfolio-Assets.pdf"
          className="portfolio-card portfolio-card--assets"
          aria-label="Download Portfolio Assets (PDF)"
        >
          <div className="portfolio-card__text">
            <h2>Portfolio Assets</h2>
            <p>Creative assets and visual work samples.</p>
          </div>
        </a>
      </div>
    </SectionPanel>
  )
}
