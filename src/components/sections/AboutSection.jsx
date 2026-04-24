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
            Beyond performance marketing, I bring a people-first mindset and positive energy to every project. I am naturally communicative, friendly, and comfortable working across teams, whether we are building strategy or creating content. Outside work, I am into vibe coding, AI automation, airsoft, gaming, streaming, design, and fashion, and I use those interests to keep my ideas fresh, relevant, and creative. I am also working toward launching my own clothing brand and building it into a meaningful long-term venture.
          </p>
        </div>
      </div>
    </SectionPanel>
  )
}
