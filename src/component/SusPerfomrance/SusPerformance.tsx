import React, { useEffect, useRef, useState } from 'react'
import styles from './SusPerformance.module.css'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import AlphaVector from './images/AlphaVector.png'
const NAV_ITEMS = [
  'Environmental Performance',
  'Social Performance',
  'Governance Performance',
]

const SusPerformance = () => {
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
      // Treat the vertical middle band of the viewport as the "active" zone
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
      <h2 className={styles.head}>Our Sustainability Performance</h2>

      <section className={styles.section}>
        {/* sticky left side buttons */}
        <div className={styles.sidebar}>
          {NAV_ITEMS.map((label, index) => (
            <button
              key={label}
              onClick={() => scrollToSection(index)}
              className={`${styles.navButton} ${activeIndex === index ? styles.navButtonActive : ''}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* right side content — all sections stacked, tracked by the observer above */}
        <div className={styles.content}>

          {/* ---------- Environmental Performance ---------- */}
          <div ref={(el) => (sectionRefs.current[0] = el)} className={styles.contentSection}>
            <p className={styles.introText}>dolor rem iste omnis ex eum dolores eaque porro sunt consectetur, sed quidem recusandae dicta odit voluptate deleniti perspiciatis error neque inventore corrupti reiciendis! Minima ipsa eum nobis voluptate necessitatibus, facere voluptatum, repellat obcaecati voluptas non quae cupiditate error voluptatem odio consequatur ad sed provident architecto ratione, veniam nostrum?</p>
            <p className={styles.introText}>sit amet consectetur adipisicing elit. Similique, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam saepe dolor rem iste omnis ex eum dolores eaque porro sunt consectetur, sed quidem recusandae dicta odit voluptate deleniti perspiciatis error neque inventore corrupti reiciendis! Minima ipsa eum nobis voluptate necessitatibus, facere voluptatum, repellat obcaecati voluptas non quae cupiditate error voluptatem odio consequatur ad sed provident architecto ratione, veniam nostrum?</p>

            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Energy and water consumption</h2>
              <p className={styles.blockText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi fugit laboriosam, vel animi distinctio neque incidunt, officia quidem nesciunt molestias delectus nulla, pariatur error esse laborum nam recusandae dolorum ratione accusamus fuga laudantium? Voluptatibus dolorem deleniti odio totam perferendis sapiente rerum et voluptates commodi fugit fugiat repellendus, nam voluptatum impedit, possimus voluptatem recusandae at adipisci veritatis quasi, aspernatur a? Minus eius ipsum voluptatum provident eum laborum magnam itaque debitis harum, molestias dolore vel dolorem quidem id sequi repudiandae facere ratione quisquam! Ipsam placeat cupiditate consectetur eligendi dolorem molestias veniam reiciendis laborum cumque quis saepe sit sint quibusdam, laudantium, fuga incidunt. Excepturi recusandae voluptatum porro delectus numquam necessitatibus consectetur dolorum cumque ullam, ex temporibus mollitia, praesentium earum quasi ipsum? Vitae, eos ratione officia libero dolore expedita rem ad laudantium ipsa qui neque quibusdam odit porro ab laborum rerum dolor. Modi, ratione aperiam dolorum quisquam assumenda aut nobis quibusdam eveniet! Iusto nam repellendus corporis laudantium ipsa quod soluta rem delectus incidunt placeat aliquid debitis aspernatur magnam voluptates cum maiores laborum vitae fugiat reprehenderit ad, architecto ducimus tenetur! Labore corporis aliquid dolorem saepe.</p>
            </div>

            <div className={styles.contentBlock2}>
              <h2 className={styles.blockTitle2}>SAIN ENVIRONMENTAL MANAGEMENT SYSTEM</h2>
              <p className={styles.blockText}>mollitia obcaecati facere accusamus iure doloribus? Officia pariatur aperiam possimus maiores obcaecati illum eveniet quasi omnis distinctio? Asperiores unde iure distinctio necessitatibus temporibus animi reprehenderit consequatur! Porro quo impedit, delectus vel voluptates dolorum consectetur iusto suscipit quisquam voluptatem dolore pariatur.</p>
              <div className={styles.bulletList}>
                <h4 className={styles.bulletItem}>&bull; Lorem ipsum dolor sit.</h4>
                <h4 className={styles.bulletItem}>&bull; Lorem ipsum dolor sit.</h4>
                <h4 className={styles.bulletItem}>&bull; Lorem ipsum dolor sit.</h4>
                <h4 className={styles.bulletItem}>&bull; Lorem ipsum dolor sit.</h4>
                <h4 className={styles.bulletItem}>&bull; Lorem ipsum dolor sit.</h4>
                <h4 className={styles.bulletItem}>&bull; Lorem ipsum dolor sit.</h4>
              </div>
            </div>
          </div>

          {/* ---------- Social Performance ---------- */}
          <div ref={(el) => (sectionRefs.current[1] = el)} className={styles.contentSection}>
            <div className={styles.socialContainer}>
              <div className={styles.first}>
                <div className={styles.textCol}>
                  <h2>social initiatives</h2>
                  <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid? ipsum dolor sit amet consectetur adipisicing elit. Fuga, vitae. Recusandae fugit nesciunt aperiam nam minima sapiente ad quisquam praesentium a! Ea ipsum vel quae ex a, laudantium inventore dolorem voluptate aperiam alias cumque odit, suscipit culpa aliquam velit quisquam sapiente neque tempora quidem possimus nesciunt, porro voluptates numquam cum! Molestiae, fugit aut voluptatem non repudiandae tempore architecto doloremque.</p>
                </div>
                <img  src={image1} alt="" />
              </div>

              <div className={styles.second}>
                <img  src={image2} alt="" />
                <div className={styles.textCol}>
                  <h2>social initiatives</h2>
                  <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid? ipsum dolor sit amet consectetur adipisicing elit. Fuga, vitae. Recusandae fugit nesciunt aperiam nam minima sapiente ad quisquam praesentium a! Ea ipsum vel quae ex a, laudantium inventore dolorem voluptate aperiam alias cumque odit, suscipit culpa aliquam velit quisquam sapiente neque tempora quidem possimus nesciunt, porro voluptates numquam cum! Molestiae, fugit aut voluptatem non repudiandae tempore architecto doloremque.</p>
                </div>
              </div>

              <div className={styles.third}>
                <div className={styles.textCol}>
                  <h2>social initiatives</h2>
                  <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid? ipsum dolor sit amet consectetur adipisicing elit. Fuga, vitae. Recusandae fugit nesciunt aperiam nam minima sapiente ad quisquam praesentium a! Ea ipsum vel quae ex a, laudantium inventore dolorem voluptate aperiam alias cumque odit, suscipit culpa aliquam velit quisquam sapiente neque tempora quidem possimus nesciunt, porro voluptates numquam cum! Molestiae, fugit aut voluptatem non repudiandae tempore architecto doloremque.</p>
                </div>
                <img  src={image3} alt="" />
              </div>

               <div className={styles.third}>
                  <div className={styles.textCol}>
                    <h2>social initiatives</h2>
                        <p>a! Ea ipsum vel quae ex a, laudantium inventore dolorem voluptate aperiam alias cumque odit, suscipit culpa aliquam velit quisquam sapiente neque tempora quidem possimus nesciunt, porro voluptates numquam cum! Molestiae, fugit aut voluptatem non repudiandae tempore architecto doloremque.</p>
                        </div>
                     <div className={styles.imagebox}>
                        <p>SAIB Saudization Rate</p>
                    <img  src={image4} alt="" />
                    <p>Saudi(5%)</p>
                    <p>non-Saudi(5%)</p>
                   </div>
</div>
            </div>
          </div>

          {/* ---------- Governance Performance ---------- */}
          {/* Placeholder — swap in the real content for this section */}
        {/* ---------- Governance Performance ---------- */}
<div ref={(el) => (sectionRefs.current[2] = el)} className={styles.contentSection}>
  <div className={styles.third}>
    <div className={styles.textCol}>
      <h2>Governance Performance</h2>
      <p>a! Ea ipsum vel quae ex a, laudantium inventore dolorem voluptate aperiam alias cumque odit, suscipit culpa aliquam velit quisquam sapiente neque tempora quidem possimus nesciunt, porro voluptates numquam cum! Molestiae, fugit aut voluptatem non repudiandae tempore architecto doloremque.</p>
      <p>a! Ea ipsum vel quae ex a, laudantium inventore dolorem voluptate aperiam alias cumque odit, suscipit culpa aliquam velit quisquam sapiente neque tempora quidem possimus nesciunt, porro voluptates numquam cum! Molestiae, fugit aut voluptatem non repudiandae tempore architecto doloremque.</p>
    </div>
   <div className={styles.imagebox}>
  <img src={image5} alt="" />
</div>
  </div>

<div className={styles.alignment}>
      <h2>Governance Performance</h2>
      <p>a! Ea ipsum vel quae ex a, laudantium inventore dolorem voluptate aperiam alias cumque odit, suscipit culpa aliquam velit quisquam sapiente neque tempora quidem possimus nesciunt, porro voluptates numquam cum! Molestiae, fugit aut voluptatem non repudiandae tempore architecto doloremque.</p>    </div>

</div>
        </div>
      <img src={AlphaVector} className={styles.alpha} alt="" />
      </section>
    </>
  )
}

export default SusPerformance