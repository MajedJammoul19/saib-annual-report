import React from 'react'
import styles from './Certificate.module.css'
import image from './images/winner.png'
import { useTranslation } from '../../translations/useTranslation' // Adjust import path

const Certificate = () => {
  const { t, language } = useTranslation()
  const isArabic = language === 'ar'

  const certificates = [
    { key: 'cert1', img: image },
    { key: 'cert2', img: image },
    { key: 'cert3', img: image },
  ]

  return (
    <div className={styles.container} dir={isArabic ? 'rtl' : 'ltr'}>
      <h2 className={styles.title}>{t('certificationsTitle')}</h2>

      <div className={styles.certificateRow}>
        {certificates.map((cert) => (
          <div key={cert.key} className={styles.certificateContainer}>
            <img src={cert.img} alt={t(cert.key)} className={styles.certificateImage} />
            <p className={styles.certificateText}>{t(cert.key)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificate