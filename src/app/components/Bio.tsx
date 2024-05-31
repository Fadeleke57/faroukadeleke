'use client'
import styles from '../styles/Bio.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import React, { useRef} from 'react'
import Image from 'next/image'
import airplane from '../../../public/photos/airplane.jpg'
import dc from '../../../public/photos/dark_computer.jpg'
import pier57 from '../../../public/photos/pier57.jpg'
import Arrow from './Arrow'


function Bio() {

  gsap.registerPlugin(ScrollTrigger);

  const namesRef = useRef(null); //ref for 'ABOUT ME'
  const bioTrigger = useRef(null);// ref for scroll trigger for header animation
  
  useGSAP(()=>{
    if (window.innerWidth > 850) {
      //image parallax animations
      const images = gsap.utils.toArray('.' + styles.projectsImg) as HTMLElement[];
      images.forEach((image : HTMLElement) => { //each image in the component goes down 200 pixels as user scrolls
        gsap.to(image, {
          y: 200,
          scrollTrigger: {  //trigger is whatever box the image is in
            trigger: image.parentElement,
            scrub: true,  //follows the scrollbar
          }
        });
      });

      const headerTL = gsap.timeline({
        scrollTrigger: {
          trigger: bioTrigger.current,
          start: 'top 60%'
        }
      });
    
      headerTL.to(namesRef.current, {
        x: '1.8%',
        duration: 1,
        ease: 'power2.out'
      });
    }
      
  });

  return (
    <section ref={bioTrigger} className={styles.projects} id="Bio">
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.textMask}>
            <h2 className={styles.textContent} ref={namesRef}><span className={styles.gradient}>About</span><br className={styles.nameBreak}></br> Me</h2>
          </div>
          <h2 className={styles.mobileHeader}><span className={styles.gradient}>About</span> Me</h2>
          <p>I am a student studying Computer Science at Boston University. When I am not in class, I develop structured and engaging websites for a variety of clients</p>
          <div className={styles.image}>
            <Image src={airplane} className={styles.projectsImg} alt='flight'/>
          </div>
          <p>From traveling to running, I love to step outside of my comfort zone to experience new things. My technical skills, gained from my studies and projects, transpire from my success as a self starter and my motivation to &quot;make things happen&quot;.</p>
          <Arrow tag='#' link='https://www.linkedin.com/in/farouk-adeleke/' color='#2e1edd'>Learn More</Arrow>
        </div>
        <div className={styles.column}>
          <div className={styles.image}><Image src={dc} className={styles.projectsImg} alt='beach'/></div>
          <div className={styles.image}><Image src={pier57} className={styles.projectsImg} alt='pier57'/></div>
        </div>
      </div>
    </section>
  )
}

export default Bio;