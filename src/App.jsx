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
  BackgroundMusic,
  Controller,
  AboutSection,
  PortfolioSection,
  PersonalDetailsSection,
} from './components'

export default function App() {
  const [activeSection, setActiveSection] = useState(null)

  const assetBase = import.meta.env.BASE_URL
  const cvPdfPath = MENU_ITEMS.find((i) => i.id === 'cv')?.pdf ?? 'cv.pdf'
  const cvPdf = `${assetBase}${cvPdfPath}`

  const closeSection = () => setActiveSection(null)
  const triggerDownload = (url, filename) => {
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  const openSection = (id) => {
    if (id === 'cv') {
      triggerDownload(cvPdf, 'cv.pdf')
      return
    }

    setActiveSection(id)
  }

  return (
    <div className="app">
      <BackgroundMusic />
      <WaveBackground />
      <TrophyToast />
      <Controller />
      <MenuBar
        items={MENU_ITEMS}
        activeSectionId={activeSection}
        onSelect={openSection}
        center={<Hero />}
      />
      <NavHint />

      {activeSection === 'about' && <AboutSection onBack={closeSection} />}
      {activeSection === 'portfolio' && (
        <PortfolioSection onBack={closeSection} />
      )}
      {activeSection === 'details' && <PersonalDetailsSection onBack={closeSection} />}

      {activeSection && <KeyboardClose onClose={closeSection} />}
    </div>
  )
}
