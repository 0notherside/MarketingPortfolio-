import SectionPanel from '../SectionPanel'

export default function PortfolioSection({ onBack }) {
  return (
    <SectionPanel title="Portfolio" titleId="portfolio-title" onBack={onBack}>
      <div className="portfolio-pills">
        <img
          src="/portfolio-pills.png"
          alt=""
          className="portfolio-pills__img"
        />
        <a
          href="/portfolio-strategy.pdf"
          download="Portfolio-Strategy.pdf"
          className="portfolio-pill-btn portfolio-pill-btn--red"
          aria-label="Download Portfolio Strategy (PDF)"
        >
          Portfolio Strategy
        </a>
        <button
          type="button"
          className="portfolio-pill-btn portfolio-pill-btn--blue"
          aria-label="Portfolio Assets"
        >
          Portfolio Assets
        </button>
      </div>
    </SectionPanel>
  )
}
