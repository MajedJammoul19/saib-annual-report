import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import logo from './images/logo.png'
import menu from './images/menu.png'
import download from './images/download.png'
import { useNavigate } from 'react-router-dom'
import { useLanguageStore } from '../../store/useLanguageStore'
import { useTranslation } from '../../translations/useTranslation'

const Navbar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.noScroll)
    } else {
      document.body.classList.remove(styles.noScroll)
    }
    return () => {
      document.body.classList.remove(styles.noScroll)
    }
  }, [isMenuOpen])

  const { language, toggleLanguage } = useLanguageStore()
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.menuGroup}>
          <button className={styles.sideButton} onClick={toggleLanguage}>
            {t('arabicButton')}
          </button>
          <img src={download} alt="Download" className={styles.menuIcon} onClick={toggleLanguage} />
        </div>

        <button onClick={() => { navigate('/annualreports') }} className={styles.middleButton}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </button>

        <div className={styles.menuGroup}>
          {isMenuOpen ? (
            <button className={styles.closeButton} onClick={closeMenu}>
              ✕
            </button>
          ) : (
            <>
              <img
                src={menu}
                alt="Menu"
                className={styles.menuIcon}
                onClick={toggleMenu}
              />
              <button
                className={styles.sideButton}
                onClick={toggleMenu}
              >
                {t('menu')}
              </button>
            </>
          )}
        </div>
      </div>

      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ''}`}
        onClick={closeMenu}
      >
        <div
          className={`${styles.sidebarWrapper} ${isMenuOpen ? styles.sidebarWrapperOpen : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.sidebarNavbar}>
            <div className={styles.menuGroup}>
              <button className={styles.sideButton}>{t('arabicButton')}</button>
              <img src={download} alt="Download" className={styles.menuIcon} />
            </div>

            <button className={styles.middleButton}>
              <img src={logo} alt="Logo" className={styles.logo} />
            </button>

            <div className={styles.menuGroup}>
              <button className={styles.closeButton} onClick={closeMenu}>
                ✕
              </button>
            </div>
          </div>

          <nav className={styles.navLinks}>
            <a onClick={() => { navigate('/') }} className={styles.navLink}>
              {t('overview')}
            </a>
            <a onClick={() => { navigate('/Leader-ship') }} className={styles.navLink}>
              {t('leadership')}
            </a>
            <a onClick={() => { navigate('/strategic-review') }} className={styles.navLink}>
              {t('strategicReview')}
            </a>
            <a onClick={() => { navigate('/business-review') }} className={styles.navLink}>
              {t('businessReview')}
            </a>
            <a onClick={() => { navigate('/sustanability-review') }} className={styles.navLink}>
              {t('sustainabilityReview')}
            </a>
            <a onClick={() => { navigate('/financial-statements') }} className={styles.navLink}>
              {t('financialStatements')}
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar