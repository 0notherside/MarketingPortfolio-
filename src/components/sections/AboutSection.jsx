import SectionPanel from '../SectionPanel'

export default function AboutSection({ onBack }) {
  return (
    <SectionPanel title="About Me" titleId="about-title" onBack={onBack}>
      <p>
        Marketing professional with a passion for brand storytelling, digital campaigns, and data-driven growth.
      </p>
      <p>
        I blend creativity with strategy to deliver campaigns that resonate and convert. From concept to execution, I focus on clear messaging and measurable results.
      </p>
      <p>
        Edit this section in <code>src/components/sections/AboutSection.jsx</code> to add your own bio, skills, and story.
      </p>
    </SectionPanel>
  )
}
