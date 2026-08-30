import React from 'react'
import image from "./images/image.png"
import styles from './Sustainability.module.css'
import Navbar from '../../component/Navbar/Navbar.js'
import Vector from './images/Vector.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa'
import { SiSnapchat } from 'react-icons/si'
import VerticalTabs from '../../component/VerticalTabs/VerticalTabs.js'
import SusFramework from '../../component/SusFramweork/SusFramework.js'
import SusPerformance from '../../component/SusPerfomrance/SusPerformance.js'
import { useTranslation } from '../../translations/useTranslation'

const Sustainability = () => {
const { t, language } = useTranslation()

  return (
    <div className={styles.container}>
      <Navbar />
      <img src={image} className={styles.heroImage} alt="Sustainability" />
      <div className={styles.overlay}>
        <h1 className={styles.title}>{t('sustainabilityTitle')}</h1>
      </div>
      <img className={styles.Vector} src={Vector} alt="" />
      {/* social links */}
      <div className={styles.socialBar}>
        <a href="#" aria-label="Snapchat"><SiSnapchat /></a>
        <a href="#" aria-label="Facebook"><FaFacebook /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="#" aria-label="X (Twitter)"><FaTwitter /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
        <a href="#" aria-label="Global/Website"><FaGlobe /></a>
      </div>
      <section className={styles.sustainabilitySection}>
        <div className={styles.sustainabilityCard}>
          <div className={styles.sustainabilityCardContent}>
            <h2>{t('sustainabilityApproach')}</h2>
            <p>{t('sustainabilityApproachDesc')}</p>
          </div>
        </div>

        <div className={styles.sustainabilityCard}>
          <div className={styles.sustainabilityCardContent}>
            <h2>{t('sustainabilityPriorities')}</h2>
            <p>{t('sustainabilityPrioritiesDesc')}</p>
          </div>
        </div>

        <h2 className={styles.headersection}>{t('sustainabilityPrioritiesCategories')}</h2>
        <VerticalTabs />
      </section>
      <SusFramework />
      <SusPerformance />
    </div>
  )
}

export default Sustainability