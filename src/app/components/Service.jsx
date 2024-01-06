'use client'
import styles from '../styles/Projects.module.css'

function Service({isAnimated, projectPhoto, header, text}) {
  return (
    <div className={styles.serviceAnim}>
        <div>
            <h2>Portrait Photography</h2>
            <p>
            Ava captures the unique essence of individuals, families, and couples with a keen eye for detail and an artistic touch.
            </p>
        </div>
        <Image src={photo} className={styles.servicesImg}/>
    </div>
  )
}

export default Service