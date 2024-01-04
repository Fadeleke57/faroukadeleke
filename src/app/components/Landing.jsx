'use client'
import styles from '../styles/Landing.module.css'
import Image from 'next/image'
import profilePic from '../../../public/profilePic.jpg'
import { Fade } from "react-awesome-reveal";

function Landing() {
  return (
    <section className={styles.landing}>
      <div className={styles.contentWrapper}>

      <div className={styles.landingHeader}>
          <div>
            <Fade cascade>
            <p>Hello! I'm..</p>
            <h1>Farouk Adeleke</h1>
            <h3>Student at <span className={styles.bostonUniversity}>Boston University</span></h3>
            <h3>Freelance <span className={styles.webDev}>Web Devlopment</span></h3>
            </Fade>
          </div>
      </div>

      </div>
    </section>
  )
}

export default Landing