'use client'
import styles from '../styles/Landing.module.css'
import Image from 'next/image'
import profilePic from '../../../public/profilePic.jpg'

import { Fade } from "react-awesome-reveal";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react'
import { useGSAP } from "@gsap/react";

function Landing() {

  // registers the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  const namesRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: namesRef.current,
        start: "top center", // animation starts when the top of the element hits the center of the viewport
        end: "bottom top", // animation ends when the bottom of the element leaves the top of the viewport
        scrub: true, // Smooth scrubbing
      },
    });

    // splits the names with a gap that increases
    tl.to(namesRef.current, {
      duration: 1,
      ease: "none",
      css: { letterSpacing: '2vw' }, // adjusts the letterSpacing value to control the separation distance
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section className={styles.landing}>
      <div className={styles.contentWrapper}>

      <div className={styles.landingHeader}>
          <div>
            <Fade cascade triggerOnce>
            <p>Hello! I'm..</p>
            </Fade>
            <h1 ref={namesRef}>Farouk * Adeleke</h1>
            <Fade cascade triggerOnce>
            <h3>Student at <span className={styles.bostonUniversity}>Boston University</span></h3>
            <h3>Freelance <span className={styles.webDev}>Web Devlopment</span></h3>
            </Fade>
          </div>
      </div>

      </div>

      <div className={styles.goDown}>
        <Link href={'#Bio'} className={styles.goDowntext}><p>Explore</p></Link>
        <Link href={'#Bio'} className={styles.goDowntext}><FontAwesomeIcon icon={faAngleDown} className={styles.icon} beatFade /></Link>
      </div>

    </section>
  )
}

export default Landing