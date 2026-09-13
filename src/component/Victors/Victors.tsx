import React from 'react'
import styles from './Victors.module.css'
import Ellipse1 from './images/Ellipse1.png'
import Ellipse2 from './images/Ellipse2.png'
import Ellipse3 from './images/Ellipse3.png'
import {useNavigate} from 'react-router-dom'
const Victors = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.container}>
        
      <img src={Ellipse1} alt="" className={styles.topArrow} onClick={() => navigate('/annualreports')} />
      
      <div className={styles.bottomRow}>
     <img src={Ellipse2} alt="" onClick={() => navigate('/')} />
        <img src={Ellipse3} alt="" onClick={() => navigate('/sustanability-review')} />
      </div>
    </div>
  )
}

export default Victors