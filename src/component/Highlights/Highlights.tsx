import React, { useRef } from 'react'
import { useCountUp } from 'react-countup'
import styles from './Highlights.module.css'
import { useTranslation } from '../../translations/useTranslation' 

const Counter = ({
  end,
  decimals = 0,
  separator = '',
}: {
  end: number
  decimals?: number
  separator?: string
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  useCountUp({
    ref,
    end,
    duration: 2,
    decimals,
    separator,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  })
  return <span ref={ref} />
}

const Highlights = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.financialHighlights}>

      <header className={styles.highlightsHeader}>
        <h2>{t('financialHighlights')}</h2>
      </header>

      <div className={styles.metricsGrid}>

        <article className={styles.metricCard}>
          <h3 className={styles.metricTitle}>{t('totalAssets')}</h3>
          <div className={styles.metricValue}>
            ₦ <Counter end={173} style={{ color: '#ffd400' }} /><span>bn</span>
          </div>
          <small className={styles.metricComparison}>(2024: ₦ 157 BN)</small>
        </article>

        <article className={styles.metricCard}>
          <h3 className={styles.metricTitle}>{t('totalEquity')}</h3>
          <div className={styles.metricValue}>
            ₦ <Counter end={22.43} decimals={2} /> bn
          </div>
          <small className={styles.metricComparison}>(2024: ₦ 21.13 BN)</small>
        </article>

        <article className={styles.metricCard}>
          <h3 className={styles.metricTitle}>{t('totalInvestmentPortfolio')}</h3>
          <div className={styles.metricValue}>
            ₦ <Counter end={47.2} decimals={1} /> bn
          </div>
          <small className={styles.metricComparison}>(2024: ₦ 41 BN)</small>
        </article>

        <article className={styles.metricCard}>
          <h3 className={styles.metricTitle}>{t('netIncome')}</h3>
          <div className={styles.metricValue}>
            ₦ <Counter end={2431} separator="," /> MN
          </div>
          <small className={styles.metricComparison}>(2024: ₦ 1,957 MN)</small>
        </article>

        <article className={styles.metricCard}>
          <h3 className={styles.metricTitle}>{t('totalIncome')}</h3>
          <div className={styles.metricValue}>
            $ <Counter end={4794} separator="," /> MN
          </div>
          <small className={styles.metricComparison}>(2024: ₦ 4,178 MN)</small>
        </article>

        <article className={styles.metricCard}>
          <h3 className={styles.metricTitle}>{t('returnOnEquity')}</h3>
          <div className={styles.metricValue}>
            <Counter end={14.76} decimals={2} /> %
          </div>
          <small className={styles.metricComparison}>(2024: 12.75%)</small>
        </article>

      </div>
    </section>
  )
}

export default Highlights