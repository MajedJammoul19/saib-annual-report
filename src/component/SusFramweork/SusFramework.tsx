import React from 'react'
import styles from './SusFramework.module.css'
import vector from './images/vector.png'

const SusFramework = () => {
  return (
    <>
      <div className={styles.FrameHeader}>
        <div className={styles.FrameContent}>
          <h2>Our Sustainability Approach</h2>
          <p>
            dolor sit amet consectetur adipisicing elit. Accusamus ipsam nobis aut odit dolorem perferendis veritatis, quibusdam assumenda dicta ex enim dolor accusantium ea architecto necessitatibus ullam illo hic deleniti!
          </p>
        </div>
      </div>

      <div className={styles.container}>

        {/* Vision */}
        <div className={styles.row}>
          <h3 className={styles.visionheaders}>Vision</h3>
          <div className={styles.visionBox}>
            <img src={vector} alt="" className={styles.visionShape} />
            <p className={styles.visionText}>
              Deliver on sustainability commitments, align with national priorities,
              and drive meaningful social impact that creates lasting value
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className={styles.row}>
          <h3 className={styles.missionheaders}>Mission</h3>
          <div className={styles.missionWrapper}>
            <span className={styles.connectorDot} />
            <div className={styles.missionBox}>
              <p>
                Promote sustainability in how we operate, finance, and engage with <br />
                our people, customers, communities, and shareholders 
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Pillars + Objectives */}
        <div className={styles.row}>
          <div className={styles.sideLabels}>
            <h3 className={styles.headers}>Strategic Pillars</h3>
            <h3 className={styles.headers}>Objectives</h3>
          </div>

          <div className={styles.pillarsRow}>

            <div className={`${styles.pillarCard} ${styles.pillarNeutral}`}>
              <div className={styles.pillarTab} />
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>1</span>
                <h4>Sustain responsible operations and transparency</h4>
              </div>
              <ul className={styles.pillarList}>
                <li>1.1 Foster sustainability across operations supporting efficiency and performance</li>
                <li>1.2 Ensure clear and consistent reporting aligned with sustainability standards</li>
              </ul>
              <div className={styles.pillarTabBottom} />
            </div>

            <div className={`${styles.pillarCard} ${styles.pillarHighlight}`}>
              <div className={styles.pillarTab} />
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>2</span>
                <h4>Drive social impact and economic development</h4>
              </div>
              <ul className={styles.pillarList}>
                <li>2.1 Strengthen initiative-based community and customer engagement</li>
                <li>2.2 Enable SMEs growth through localization and capability development</li>
                <li>2.3 Support talent development and employee wellbeing</li>
              </ul>
              <div className={styles.pillarTabBottom} />
            </div>

            <div className={`${styles.pillarCard} ${styles.pillarNeutral}`}>
              <div className={styles.pillarTab} />
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>3</span>
                <h4>Uphold sustainable finance offering</h4>
              </div>
              <ul className={styles.pillarList}>
                <li>3.1 Support customers in their sustainability journey with tailored financing solutions</li>
                <li>3.2 Assess sustainability-linked opportunities</li>
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