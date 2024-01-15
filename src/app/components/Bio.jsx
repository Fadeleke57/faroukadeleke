'use client'

import styles from '../styles/Bio.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import SplitType from 'split-type';

import Image from 'next/image'
import Link from 'next/link'

import airplane from '../../../public/photos/airplane.jpg'
import cr from '../../../public/photos/costaRica.jpg'
import pier57 from '../../../public/photos/pier57.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Bio() {

  gsap.registerPlugin(ScrollTrigger);

  //ref for 'ABOUT ME'
  const namesRef = useRef(null);
  // ref for scroll trigger for header animation
  const bioTrigger = useRef(null);
  
  useGSAP(()=>{

    //image parallax animations
    const images = gsap.utils.toArray('.' + styles.projectsImg);
    images.forEach(image => {     //each image in the component goes down 200 pixels as user scrolls
      gsap.to(image, {
        y: 200,
        scrollTrigger: {  //trigger is whatever box the image is in
          trigger: image.parentElement,
          scrub: true,  //follows the scrollbar
        }
      });
    });

    const adjustHeaderMovement = () => {
      // Define different movement amounts for different screen widths
      let movementX = '1.8%'; // Default for larger screens
    
      if (window.innerWidth <= 900) { // Example for screens smaller than 480px
        movementX = 73; // Smaller movement for mobile devices
      }
    
      return movementX;
    };
       
      const headerTL = gsap.timeline({
        scrollTrigger: {
          trigger: bioTrigger.current,
          start: 'top 60%'
        }
      });
    
      headerTL.to(namesRef.current, {
        x: () => adjustHeaderMovement(), // Use the function to set the x value
        duration: 1,
        ease: 'power2.out'
      });
 
  });
  
  //link arrow ref
  const arrow = useRef(null);

  //moves arrow right on hover
  const handleHover = () => {
    gsap.to(arrow.current, {
      x: 30,
      duration: 0.2
  })
  };

  //resets when mouse leaves link
  const handleMouseLeave = () => {
    gsap.to(arrow.current, {
      x: 0,
      duration: 0.2
    });
  };

  return (

    <section ref={bioTrigger} className={styles.projects}>

      <div className={styles.container}>

        <div className={styles.column}>
          <div  className={styles.textMask}>
            <h2 className={styles.textContent} ref={namesRef}><span className={styles.gradient}>About</span> Me</h2>
          </div>
          <p>
            I am a student studying Computer Science at Boston University. When I am not in class, I develop structured and engaging websites for a variety of clients.
          </p>

          <div className={styles.image}>
            <Image src={airplane} className={styles.projectsImg} alt='flight'/>
          </div>

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
          <div className={styles.image}><Image src={cr} className={styles.projectsImg} alt='beach'/></div>
          <div className={styles.image}><Image src={pier57} className={styles.projectsImg} alt='pier57'/></div>
        </div>

      </div>

    </section>

  )
}

export default Bio;