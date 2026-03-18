import SectionPanel from '../SectionPanel'

export default function AboutSection({ onBack }) {
  const assetBase = import.meta.env.BASE_URL

  return (
    <SectionPanel title="About Me" titleId="about-title" onBack={onBack}>
      <div className="about-section">
        <img
          src={`${assetBase}about-photo.png`}
          alt="Profile photo"
          className="about-section__photo"
        />
        <div className="about-section__text">
          <p>
            Performance-focused Digital Marketing Specialist with a proven track record of delivering multi-brand campaigns and driving significant audience growth at Sanofi CHC UK. Having lived in the UK since 2015, I possess a deep understanding of the local market landscape, combined with a highly adaptable, friendly, and communicative approach to professional collaboration.
          </p>
          <p>
            I specialise in paid media, content optimisation, and market analysis using tools such as Nielsen Ad Intel and Google Analytics 4. I am experienced in managing complex budgets, boosting engagement, and translating data into actionable strategy. A strong collaborator with a creative edge, I combine technical marketing expertise with 3D design and digital content production to develop innovative, high-impact marketing solutions.
          </p>
        </div>
      </div>
    </SectionPanel>
  )
}
