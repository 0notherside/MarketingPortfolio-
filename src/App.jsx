import { useState } from 'react'
import './App.css'

import { MENU_ITEMS } from './constants/menuItems'
import {
  Hero,
  MenuBar,
  NavHint,
  TrophyToast,
  KeyboardClose,
  WaveBackground,
  AboutSection,
  PortfolioSection,
  CVSection,
  PersonalDetailsSection,
} from './components'

export default function App() {
  const [activeSection, setActiveSection] = useState(null)

  const openSection = (id) => setActiveSection(id)
  const closeSection = () => setActiveSection(null)

  const portfolioPdf = MENU_ITEMS.find((i) => i.id === 'portfolio')?.pdf ?? '/portfolio.pdf'
  const cvPdf = MENU_ITEMS.find((i) => i.id === 'cv')?.pdf ?? '/cv.pdf'

  return (
    <div className="app">
      <WaveBackground />
      <TrophyToast title="Fashion Junkie" />
      <MenuBar
        items={MENU_ITEMS}
        activeSectionId={activeSection}
        onSelect={openSection}
        center={<Hero />}
      />
      <NavHint />

      {activeSection === 'about' && <AboutSection onBack={closeSection} />}
      {activeSection === 'portfolio' && (
        <PortfolioSection onBack={closeSection} pdfUrl={portfolioPdf} />
      )}
      {activeSection === 'cv' && (
        <CVSection onBack={closeSection} pdfUrl={cvPdf} />
      )}
      {activeSection === 'details' && <PersonalDetailsSection onBack={closeSection} />}

      {activeSection && <KeyboardClose onClose={closeSection} />}
    </div>
  )
}
