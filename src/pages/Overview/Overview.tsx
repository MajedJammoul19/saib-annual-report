import React from 'react'
import Navbar from '../../component/Navbar/Navbar.js'
import overview from './images/overview.jpg'
import styles from './OverView.module.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa'
import { SiSnapchat } from 'react-icons/si'
import arrow from './images/Vector.png'
import SubHeader from '../../component/SubHeader/SubHeader.js'
import Slider from '../../component/Slider/Slider.js'
import Certificate from '../../component/Certificate/Certificate.js'
import Highlights from '../../component/Highlights/Highlights.js'
import { useTranslation } from '../../translations/useTranslation.js'

const Overview = () => {
  const { t, language } = useTranslation()
  const isArabic = language === 'ar'

  return (
    <div >
      <Navbar />

      <div className={styles.hero}>
        <img className={styles.heroImage} src={overview} alt="Overview" />

        <div className={styles.overlay}>
          <h1 className={styles.title}>{t('overviewTitle')}</h1>
          <button className={styles.pdfButton}>{t('downloadPDF')}</button>
        </div>

        <img className={styles.arrow} src={arrow} alt="" />

        <div className={styles.socialBar}>
          <a href="#" aria-label="Snapchat"><SiSnapchat /></a>
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="X (Twitter)"><FaTwitter /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="Global/Website"><FaGlobe /></a>
        </div>
      </div>
      
      <SubHeader />
      <Slider />
      <Certificate />
      <Highlights />
    </div>
  )
}

export default Overview