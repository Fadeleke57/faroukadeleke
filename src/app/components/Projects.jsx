'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import styles from '../styles/Projects.module.css';
import Image from 'next/image';
import photo from '../../../public/background.jpg'

const Projects = () => {

  useEffect(() => {

  const lenis = new Lenis({
    duration: 0.6,
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

  //Scroll Trigger Init
  gsap.registerPlugin(ScrollTrigger);
  const pinnedContainer = document.querySelector('.' + styles.hero)
  //Get the title element
  const title = document.querySelector('.' + styles.title);
  /*Split the title text into individual characters
  using the split type library*/
  const titleText = new SplitType(title, {
    types: "chars"
  });

  //Title Animation
  gsap.to(titleText.chars, {
    y: -600, //Move each letter up
    stagger: 0.4, //Set a delay for every letter
    scrollTrigger: {
      trigger: '.' + styles.hero, //Set trigger element for animation
      start: "top top", //Set starting point of the animation
      scrub: true, //Make the animation follow the scroll position
      end: '+=100'
    },
  });

  //Get the sub title element
  const subTitle = document.querySelector('.' + styles.subTitle);
  //Split the text of the sub title into individual characters
  const subTitleText = new SplitType(subTitle, {
    types: "chars"
  });
  //Sub Title Animation
  gsap.from(subTitleText.chars, {
    opacity: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.' + styles.hero,
      start: "top top",
      scrub: true,
      pin: true,
      end: '+=100'
    },
  });

  //Select all service elements with GSAP
  const services = gsap.utils.toArray('.' + styles.serviceAnim);
  //Loop through each service element
  services.forEach(service => {
    //Services Animation
    gsap.to(service, {
      scale: 0.8,
      yPercent: -20,
      scrollTrigger: {
        trigger: service,
        start: "top top",
        scrub: true,
        pin: true,
        /*Remove pin spacing so 
        that the services stack*/
        pinSpacing: false,
        end: "bottom top",
      },
    });
  });

  }, []);

  return (
    <div>

      <section className={styles.hero} id='Bio'>
        <h1 className={styles.title}>Projects</h1>
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