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

import Link from 'next/link'

  function Projects() {

    
    const heroSection = useRef(null)
    const title = useRef(null)
    const subtitle = useRef(null)

    const footer = useRef(null)
    const footerDiv = useRef(null)

    gsap.registerPlugin(ScrollTrigger) 

    useGSAP(() => {

      // splits the title text into individual characters
      const titleText = new SplitType(title.current, {
        types: "chars"
      });

      const subTitleText = new SplitType(subtitle.current, {
        types: "chars"
      });

      if (title.current) {
        // title animation
        gsap.to(titleText.chars, {
          y: -300, // letter moves up 300 pixels
          stagger: 0.1, //staggers the split letters
          scrollTrigger: {
            trigger: heroSection.current, //start of section begins animation
            start: "top top", //starting point -- top of the view box is at the top of trigger
            scrub: true, //follows the scroll bar
            pin: true, //fixes the trigger element until the animation is done
          },
        });

        // subtitle animation
        gsap.from(subTitleText.chars, {
          opacity: 0.2,
          stagger: 0.1,
          scrollTrigger: {
            trigger: heroSection.current,
            start: "top 20%",
            scrub: true,
          },
        });

        //adds all animated sections to an array
        const services = gsap.utils.toArray('.' + styles.serviceAnim);
        //loops through each service element
        services.forEach(service => {
          //services animation
          gsap.to(service, {
            scale: 0.8,
            yPercent: -20,
            scrollTrigger: {
              trigger: service,
              start: "top top",
              scrub: true,
              pin: true,
              // so the services stack
              pinSpacing: false,
              end: "bottom top",
            },
          });
        });

        //Footer animation
        gsap.from(footerDiv.current, {
          y: 100,
          opacity: 0,
          //Delay each div animation by 0.5 seconds
          scrollTrigger: {
            trigger: footer.current,
            start: "top bottom",
            //Restart animation when scrolling back
            toggleActions: "restart none none none",
          },
        });
    
      }

    });

  return (
    <div>

      <section ref={heroSection} className={styles.hero} id='Bio'>

        <h1 ref={title} className={styles.title}>Projects</h1>

        <p ref={subtitle} className={styles.subTitle}>
          I strive to put one-hundred percent effort into every project that I delve into, focusing on honing my skills over subpar work. Below are some of the projects I have completed in and outside of the classroom. 
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

      <footer ref={footer} className={styles.footer}>

        <div ref={footerDiv}>
          <h2>There's More!</h2>
          <p>If you want to learn more about a particular project or see my full array of repositories visit my github at <Link href={'https://github.com/Fadeleke57?tab=repo'} target='blank'>https://github.com/Fadeleke57</Link>.</p>
        </div>

      </footer>

    </div>
  )
}

export default Projects