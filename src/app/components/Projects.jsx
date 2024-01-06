'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import styles from '../styles/Projects.module.css';

import Image from 'next/image';
import photo from '../../../public/background.jpg'
import bfv from '../../../public/servicePics/BFP.png'
import ctv from '../../../public/servicePics/CTP.png'
import ldv from '../../../public/servicePics/LDP.png'

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

        <h1 ref={title} className={styles.title}><span className={styles.gradient}>My</span> Projects</h1>

        <p ref={subtitle} className={styles.subTitle}>
          I strive to put one-hundred percent effort into every project that I delve into, focusing on honing my skills over subpar work. Below are some of the projects I have completed in and outside of the classroom. 
        </p>

      </section>

      <section className={styles.services}>

        <div className={styles.serviceAnim}>
          <div>
            <h2>REST API For Predicting Next-Day Stock Price</h2>
            <p>
              A specialized stock price prediction tool using PyTorch and NumPy, focusing on LSTM neural networks to analyze and predict stock market trends.
            </p>
          </div>
          <Image src={ldv} className={styles.servicesImg}/>
        </div>

        <div className={styles.serviceAnim}>
          <div>
            <h2>Bonsai Finance</h2>
            <p>
              A comprehensive platform powered by the Alpha VantageAPI, offering real-time stock information and relavant news to users.
            </p>
          </div>
          <Image src={bfv} className={styles.servicesImg}/>
        </div>

        <div className={styles.service}>
          <div>
            <h2>Investment Management Company Site</h2>
            <p>
              Website built with NextJs for Cat Trail Capital LLC, an investment management company. Deployed on Vercel.
            </p>
          </div>
          <Image src={ctv} className={styles.servicesImg}/>
        </div>

      </section>

      <footer ref={footer} className={styles.footer}>

        <div ref={footerDiv}>
          <h2>There's More!</h2>
          <p>To learn more about a particular project or view my full array of repositories, visit my github at <Link href={'https://github.com/Fadeleke57?tab=repo'} target='blank'>https://github.com/Fadeleke57</Link>.</p>
        </div>

      </footer>

    </div>
  )
}

export default Projects