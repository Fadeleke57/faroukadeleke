'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import styles from '../styles/Projects.module.css';
import Image from 'next/image';
import photo from '../../../public/background.jpg'
//life saver
import { useGSAP } from "@gsap/react";

  function Projects() {

    const title = useRef(null)
    const heroSection = useRef(null)
    gsap.registerPlugin(ScrollTrigger) 

    useGSAP(() => {

      // Split the title text into individual characters
      const titleText = new SplitType(title.current, {
        types: "chars"
      });

      if (title.current) {
        //title animation
        gsap.to(titleText.chars, {
          y: -300, //Move each letter up
          stagger: 0.1, //Set a delay for every letter
          scrollTrigger: {
            trigger: heroSection.current, //Set trigger element for animation
            start: "top top", //Set starting point of the animation
            scrub: 1, //Make the animation follow the scroll position
            pin: heroSection.current, //Fix the trigger element until the animation is done
        },
      });
      
      }



    });

  return (
    <div>

      <section ref={heroSection} className={styles.hero} id='Bio'>
        <h1 ref={title} className={styles.title}>Projects</h1>
        <p className={styles.subTitle}>
          Ava Taylor is a passionate and creative photographer based in the picturesque town of Willowbrook. With an unquenchable thirst for capturing the beauty of the world through her lens. 
        </p>
      </section>

      <section className={styles.services}>

        <div className={styles.serviceAnim}>
          <div>
            <h2>Portrait Photography</h2>
            <p>
              Ava captures the unique essence of individuals, families, and couples with a keen eye for detail and an artistic touch.
            </p>
          </div>
          <Image src={photo} className={styles.servicesImg}/>
        </div>

        <div className={styles.serviceAnim}>
          <div>
            <h2>Portrait Photography</h2>
            <p>
              Ava captures the unique essence of individuals, families, and couples with a keen eye for detail and an artistic touch.
            </p>
          </div>
          <Image src={photo} className={styles.servicesImg}/>
        </div>

        <div className={styles.serviceAnim}>
          <div>
            <h2>Landscape Photography</h2>
            <p>
              She has a profound connection with nature and is adept at capturing the awe-inspiring beauty of landscapes and scenic locations.
            </p>
          </div>
          <Image src={photo} className={styles.servicesImg} />
        </div>

        <div className={styles.service}>
          <div>
            <h2>Product Photography</h2>
            <p>
              If you're a business owner looking to showcase your products in the best possible light, Ava's product photography will help you shine.
            </p>
          </div>
          <Image src={photo} className={styles.servicesImg}/>
        </div>

      </section>

    </div>
  )
}

export default Projects