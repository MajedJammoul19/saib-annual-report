import React from 'react'
import slider from './images/slider.png'
import styles from './Slider.module.css'
import { useTranslation } from '../../translations/useTranslation.js' 

const Slider = () => {
  const { t, language } = useTranslation()
  const isArabic = language === 'ar'

  return (
    <div className={styles.container} >
      <h2 className={styles.title}>{t('awardsTitle')}</h2>
      <div className={styles.tickerWrapper}>
        <div className={styles.tickerTrack}>
          <img src={slider} alt="Award" className={styles.tickerImage} />
          <img src={slider} alt="Award" className={styles.tickerImage} />
          <img src={slider} alt="Award" className={styles.tickerImage} />
          <img src={slider} alt="Award" className={styles.tickerImage} />
          <img src={slider} alt="Award" className={styles.tickerImage} />
        </div>
      </div>
    </div>
  )
}

export default Slider