import React, { useState } from 'react'
import styles from './VerticalTabs.module.css'
const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <section className={styles.section}>
        <div className={styles.verticalTabsContainer}>
          <div className={styles.verticalButtons}>
            <button 
              className={`${styles.tabButton} ${activeTab === 0 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(0)}
            >
              Green Products
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 1 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(1)}
            >
              Climate Change
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 2 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(2)}
            >
              Sustainable Energy
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 3 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(3)}
            >
              Waste Management
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 4 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(4)}
            >
              Water Conservation
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 5 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(5)}
            >
              Biodiversity
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 6 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(6)}
            >
              Circular Economy
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 7 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(7)}
            >
              Carbon Footprint
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 8 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(8)}
            >
              Social Impact
            </button>
          </div>

          <div className={styles.contentArea}>
            {/* Content 1 */}
            {activeTab === 0 && (
              <div className={styles.content1}>
                <p><strong>1. Green Products :</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p><strong>2. Climate Change :</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            )}

            {/* Content 2 */}
            {activeTab === 1 && (
              <div className={styles.content2}>
                <p><strong>1. Rising Temperatures :</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><strong>2. Extreme Weather :</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                <p><strong>3. Sea Level Rise :</strong> Excepteur sint occaecat cupidatat non proident.</p>
                <p><strong>4. Carbon Emissions :</strong> Sed ut perspiciatis unde omnis iste natus error.</p>
                <p><strong>5. Renewable Energy :</strong> Nemo enim ipsam voluptatem quia voluptas.</p>
                <p><strong>6. Climate Policy :</strong> Neque porro quisquam est qui dolorem ipsum.</p>
                <p><strong>7. Global Warming :</strong> Quis autem vel eum iure reprehenderit.</p>
              </div>
            )}

            {/* Content 3 */}
            {activeTab === 2 && (
              <div className={styles.content3}>
                <p><strong>1. Solar Power :</strong> Lorem ipsum dolor sit amet.</p>
                <p><strong>2. Wind Energy :</strong> Consectetur adipiscing elit.</p>
                <p><strong>3. Hydro Power :</strong> Sed do eiusmod tempor.</p>
                <p><strong>4. Geothermal :</strong> Ut labore et dolore magna.</p>
              </div>
            )}

            {/* Content 4 */}
            {activeTab === 3 && (
              <div className={styles.content4}>
                <p><strong>1. Recycling :</strong> Lorem ipsum dolor sit amet consectetur.</p>
                <p><strong>2. Composting :</strong> Sed do eiusmod tempor incididunt.</p>
                <p><strong>3. Landfill Reduction :</strong> Ut enim ad minim veniam.</p>
                <p><strong>4. Circular Economy :</strong> Duis aute irure dolor in reprehenderit.</p>
              </div>
            )}

            {/* Content 5 */}
            {activeTab === 4 && (
              <div className={styles.content5}>
                <p><strong>1. Water Efficiency :</strong> Lorem ipsum dolor sit amet.</p>
                <p><strong>2. Rainwater Harvesting :</strong> Consectetur adipiscing elit.</p>
                <p><strong>3. Wastewater Treatment :</strong> Sed do eiusmod tempor.</p>
              </div>
            )}

            {/* Content 6 */}
            {activeTab === 5 && (
              <div className={styles.content6}>
                <p><strong>1. Ecosystem Protection :</strong> Lorem ipsum dolor sit amet.</p>
                <p><strong>2. Species Conservation :</strong> Consectetur adipiscing elit.</p>
                <p><strong>3. Habitat Restoration :</strong> Sed do eiusmod tempor.</p>
              </div>
            )}

            {/* Content 7 */}
            {activeTab === 6 && (
              <div className={styles.content7}>
                <p><strong>1. Reduce, Reuse, Recycle :</strong> Lorem ipsum dolor sit amet.</p>
                <p><strong>2. Product Lifecycle :</strong> Consectetur adipiscing elit.</p>
                <p><strong>3. Zero Waste :</strong> Sed do eiusmod tempor.</p>
              </div>
            )}

            {/* Content 8 */}
            {activeTab === 7 && (
              <div className={styles.content8}>
                <p><strong>1. Carbon Neutrality :</strong> Lorem ipsum dolor sit amet.</p>
                <p><strong>2. Offset Programs :</strong> Consectetur adipiscing elit.</p>
                <p><strong>3. Green Logistics :</strong> Sed do eiusmod tempor.</p>
              </div>
            )}

            {/* Content 9 */}
            {activeTab === 8 && (
              <div className={styles.content9}>
                <p><strong>1. Community Engagement :</strong> Lorem ipsum dolor sit amet.</p>
                <p><strong>2. Social Equity :</strong> Consectetur adipiscing elit.</p>
                <p><strong>3. Employee Wellbeing :</strong> Sed do eiusmod tempor.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default VerticalTabs