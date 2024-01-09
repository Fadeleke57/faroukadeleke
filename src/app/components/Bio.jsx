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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Bio() {
  gsap.registerPlugin(ScrollTrigger);
  
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

  const arrow = useRef(null);

  const handleHover = () => {
    gsap.to(arrow.current, {
      x: 30,
      duration: 0.2
  })
  };

  //resets
  const handleMouseLeave = () => {
    gsap.to(arrow.current, {
      x: 0,
      duration: 0.2
    });
  };

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2><span className={styles.gradient}>About</span> Me</h2>
          <p>
            I am a student studying Computer Science at Boston University. When I am not in class, I develop structured and engaging websites for a variety of clients.
          </p>
          <div className={styles.image}><Image src={airplane} className={styles.projectsImg}/></div>
          <p>
            From traveling to running, I love to step outside of my comfort zone to experience new things. My technical skills, gained from my studies and projects, transpire from my success as a self starter and my motivation to "make things happen".
          </p>
          <a 
            href="#" 
            className={styles.btn} 
            onMouseEnter={() => handleHover()} 
            onMouseLeave={() => handleMouseLeave()}>
            Learn More
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className={styles.projectArrow}
              ref={arrow}
            />
          </a>
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