import React from 'react'
import styles from './SusFramework.module.css'
import vector from './images/vector.png'
import { useTranslation } from '../../translations/useTranslation.js'

const SusFramework = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.FrameHeader}>
        <div className={styles.FrameContent}>
          <h2>{t('sustainabilityApproachTitle')}</h2>
          <p>{t('sustainabilityApproachDescFramework')}</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
          <h3 className={styles.visionheaders}>{t('vision')}</h3>
          <div className={styles.visionBox}>
            <img src={vector} alt="" className={styles.visionShape} />
            <p className={styles.visionText}>{t('visionText')}</p>
          </div>
        </div>

        <div className={styles.row}>
          <h3 className={styles.missionheaders}>{t('mission')}</h3>
          <div className={styles.missionWrapper}>
            <span className={styles.connectorDot} />
            <div className={styles.missionBox}>
              <p>{t('missionText')}</p>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.sideLabels}>
            <h3 className={styles.headers}>{t('strategicPillars')}</h3>
            <h3 className={styles.headers}>{t('objectives')}</h3>
          </div>

          <div className={styles.pillarsRow}>
            <div className={`${styles.pillarCard} ${styles.pillarNeutral}`}>
              <div className={styles.pillarTab} />
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>1</span>
                <h4>{t('pillar1Title')}</h4>
              </div>
              <ul className={styles.pillarList}>
                <li>{t('pillar1Item1')}</li>
                <li>{t('pillar1Item2')}</li>
              </ul>
              <div className={styles.pillarTabBottom} />
            </div>

            <div className={`${styles.pillarCard} ${styles.pillarHighlight}`}>
              <div className={styles.pillarTab} />
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>2</span>
                <h4>{t('pillar2Title')}</h4>
              </div>
              <ul className={styles.pillarList}>
                <li>{t('pillar2Item1')}</li>
                <li>{t('pillar2Item2')}</li>
                <li>{t('pillar2Item3')}</li>
              </ul>
              <div className={styles.pillarTabBottom} />
            </div>

            <div className={`${styles.pillarCard} ${styles.pillarNeutral}`}>
              <div className={styles.pillarTab} />
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>3</span>
                <h4>{t('pillar3Title')}</h4>
              </div>
              <ul className={styles.pillarList}>
                <li>{t('pillar3Item1')}</li>
                <li>{t('pillar3Item2')}</li>
              </ul>
              <div className={styles.pillarTabBottom} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SusFramework