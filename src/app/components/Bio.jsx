'use client'

import styles from '../styles/Bio.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import test from '../../../public/background.jpg'
import airplane from '../../../public/photos/airplane.jpg'
import cr from '../../../public/photos/costaRica.jpg'
import montreal from '../../../public/photos/montreal.jpg'
import pier57 from '../../../public/photos/pier57.jpg'


function Bio() {
  //Image parallax animations
  useGSAP(()=>{
    const images = gsap.utils.toArray('.' + styles.projectsImg);
    images.forEach(image => {
      gsap.to(image, {
        y: 200,
        scrollTrigger: {
          trigger: image.parentElement,
          scrub: true,
        }
      });
    });
  })

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2><span className={styles.gradient}>About</span> Me</h2>
          <p>
            Our portfolio is a testament to the dynamic solutions we've crafted for our clients, each project a unique story of challenges conquered and brands revitalized.
          </p>
          <div className={styles.image}><Image src={airplane} className={styles.projectsImg}/></div>
          <p>
            From redefining brand identities to mastering SEO landscapes and curating captivating content, our portfolio reflects the diverse expertise we bring to the table. Explore these snapshots of success, where collaboration and creativity converge to shape compelling narratives and deliver tangible results. 
          </p>
          <a href="#" className={styles.btn}>Learn More</a>
        </div>
      <div className={styles.column}>
        <div className={styles.image}><Image src={cr} className={styles.projectsImg}/></div>
        <div className={styles.image}><Image src={pier57} className={styles.projectsImg}/></div>
      </div>
      </div>
    </section>
  )
}

export default Bio;