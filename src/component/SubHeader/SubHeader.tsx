import React from 'react'
import styles from './subHeader.module.css'
import { useTranslation } from '../../translations/useTranslation.js'

const SubHeader = () => {
  const { t, language } = useTranslation()
  const isArabic = language === 'ar'

  return (
    <div className={styles.container} dir={isArabic ? 'rtl' : 'ltr'}>
      <div className={styles.buttonGroup}>
        <button className={`${styles.navButton} ${styles.active}`}>
          {t('atAGlance')}
        </button>
        <button className={styles.navButton}>
          {t('yearInReview')}
        </button>
        <button className={styles.navButton}>
          {t('investmentCase')}
        </button>
      </div>
      <h2 className={styles.title}>{t('subHeaderTitle')}</h2>
      <p className={styles.description}>{t('subHeaderDescription')}</p>
    </div>
  )
}

export default SubHeader