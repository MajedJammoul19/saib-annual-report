import React, { useEffect, useRef, useState } from 'react'
import styles from './SusPerformance.module.css'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import AlphaVector from './images/AlphaVector.png'
import { useTranslation } from '../../translations/useTranslation'

const NAV_ITEMS = [
  'environmentalPerformance',
  'socialPerformance',
  'governancePerformance',
]

const SusPerformance = () => {
  const { t } = useTranslation()
  const sectionRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target)
            if (index !== -1) setActiveIndex(index)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sectionRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <h2 className={styles.head}>{t('sustainabilityPerformance')}</h2>

      <section className={styles.section}>
        <div className={styles.sidebar}>
          {NAV_ITEMS.map((key, index) => (
            <button
              key={key}
              onClick={() => scrollToSection(index)}
              className={`${styles.navButton} ${activeIndex === index ? styles.navButtonActive : ''}`}
            >
              {t(key)}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          <div ref={(el) => (sectionRefs.current[0] = el)} className={styles.contentSection}>
            <p className={styles.introText}>{t('environmentalDesc1')}</p>
            <p className={styles.introText}>{t('environmentalDesc2')}</p>

            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>{t('energyWaterConsumption')}</h2>
              <p className={styles.blockText}>{t('energyWaterDesc')}</p>
            </div>

            <div className={styles.contentBlock2}>
              <h2 className={styles.blockTitle2}>{t('sainEnvironmental')}</h2>
              <p className={styles.blockText}>{t('sainDesc')}</p>
              <div className={styles.bulletList}>
                <h4 className={styles.bulletItem}>&bull; {t('bullet1')}</h4>
                <h4 className={styles.bulletItem}>&bull; {t('bullet2')}</h4>
                <h4 className={styles.bulletItem}>&bull; {t('bullet3')}</h4>
                <h4 className={styles.bulletItem}>&bull; {t('bullet4')}</h4>
                <h4 className={styles.bulletItem}>&bull; {t('bullet5')}</h4>
                <h4 className={styles.bulletItem}>&bull; {t('bullet6')}</h4>
              </div>
            </div>
          </div>

          <div ref={(el) => (sectionRefs.current[1] = el)} className={styles.contentSection}>
            <div className={styles.socialContainer}>
              <div className={styles.first}>
                <div className={styles.textCol}>
                  <h2>{t('socialInitiatives')}</h2>
                  <p>{t('socialDesc1')}</p>
                </div>
                <img src={image1} alt={t('socialInitiatives')} />
              </div>

              <div className={styles.second}>
                <img src={image2} alt={t('socialInitiatives')} />
                <div className={styles.textCol}>
                  <h2>{t('socialInitiatives')}</h2>
                  <p>{t('socialDesc2')}</p>
                </div>
              </div>

              <div className={styles.third}>
                <div className={styles.textCol}>
                  <h2>{t('socialInitiatives')}</h2>
                  <p>{t('socialDesc3')}</p>
                </div>
                <img src={image3} alt={t('socialInitiatives')} />
              </div>

              <div className={styles.third}>
                <div className={styles.textCol}>
                  <h2>{t('socialInitiatives')}</h2>
                  <p>{t('socialDesc4')}</p>
                </div>
                <div className={styles.imagebox}>
                  <p>{t('saibSaudization')}</p>
                  <img src={image4} alt={t('saibSaudization')} />
                  <p>{t('saudi')}(5%)</p>
                  <p>{t('nonSaudi')}(5%)</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={(el) => (sectionRefs.current[2] = el)} className={styles.contentSection}>
            <div className={styles.third}>
              <div className={styles.textCol}>
                <h2>{t('governancePerformance')}</h2>
                <p>{t('governanceDesc1')}</p>
                <p>{t('governanceDesc2')}</p>
              </div>
              <div className={styles.imagebox}>
                <img src={image5} alt={t('governancePerformance')} />
              </div>
            </div>

            <div className={styles.alignment}>
              <h2>{t('governancePerformance')}</h2>
              <p>{t('governanceDesc3')}</p>
            </div>
          </div>
        </div>
        <img src={AlphaVector} className={styles.alpha} alt="" />
      </section>
    </>
  )
}

export default SusPerformance