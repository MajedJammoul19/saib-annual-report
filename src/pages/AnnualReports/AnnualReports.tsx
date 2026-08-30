import React, { useState, useEffect } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import logo from './images/logo.png'
import vector from './images/Vector.png'
import wave1 from './images/wave1.svg'
import styles from './AnnualReports.module.css'
import { useTranslation } from '../../translations/useTranslation'
import AlphaVector from './images/AlphaVector.png'

const HeroSection = () => {
  const { t, language } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSlideOpen, setIsSlideOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleSlide = () => {
    setIsSlideOpen(!isSlideOpen)
  }

  const closeSlide = () => {
    setIsSlideOpen(false)
  }

  const [phase, setPhase] = useState<'logo' | 'vector' | 'done'>('logo')

  useEffect(() => {
    const timer = setTimeout(() => setPhase('vector'), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (phase === 'vector') {
      const timer = setTimeout(() => setPhase('done'), 1500)
      return () => clearTimeout(timer)
    }
  }, [phase])

  // Helper to render text with newlines as <br />
  const renderWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

 return (
  <>
    {phase !== 'done' && (
      <div className={styles.splashScreen}>
        <img src={logo} alt="Logo" className={styles.splashLogo} />
        {phase === 'vector' && (
          <img src={vector} alt="" className={styles.splashVector} />
        )}
      </div>
    )}

    {phase === 'done' && (
      <>
        <Navbar />

        <div className={styles.content} >
          <div className={styles.textContainer}>
            <h3 className={`${styles.fadeItem} ${styles.annualTitle}`}>
              {t('annualReport')} <span className={styles.sp}>2025</span>
            </h3>

            <h3 className={`${styles.fadeItem} ${styles.subtitle}`}>
              {t('disciplinedGrowth')}
            </h3>

            <h3 className={`${styles.fadeItem} ${styles.subtitle2}`}>
              {t('diversifiedReturns')}
            </h3>

            <button onClick={toggleSlide} className={`${styles.fadeItem} ${styles.themeButton}`}>
              {t('themeOfYear')}
            </button>
          </div>
          <img src={wave1} alt="" className={styles.wave} />
        </div>

        <div
          className={`${styles.slideOverlay} ${isSlideOpen ? styles.slideOpen : ''}`}
          onClick={closeSlide}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          <div
            className={`${styles.slidePanel} ${isSlideOpen ? styles.slidePanelOpen : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeSlide}>
              ✕
            </button>
            <img src={AlphaVector} alt="" className={styles.alpha} />
            <div className={styles.slideContent}>
              <div className={styles.headersContainer}>
                <h2 className={styles.slideHeading1}>{t('slideHeading1')}</h2>
                <h2 className={styles.slideHeading2}>{t('slideHeading2')}</h2>
              </div>
              <p className={styles.slideParagraph1}>
                {renderWithLineBreaks(t('slideParagraph1'))}
              </p>
              <p className={styles.slideParagraph}>{t('slideParagraph2')}</p>
              <p className={styles.slideParagraph}>{t('slideParagraph3')}</p>
            </div>
          </div>
        </div>
      </>
    )}
  </>
)
}

export default HeroSection