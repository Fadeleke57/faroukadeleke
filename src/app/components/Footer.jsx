'use client'
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import { Fade } from "react-awesome-reveal";
import {useRef} from 'react'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

import Link from 'next/link'
import Form from './Form'

function Footer() {
  const title = useRef(null)
  const socialMediaIcons = useRef([]);

  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {
    gsap.from(title.current, {
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: title.current,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const handleHover = (index) => {
    gsap.to(socialMediaIcons.current[index], {
    rotate: 360,
    duration: 0.5
  })
  };

  //resets
  const handleMouseLeave = (index) => {
    gsap.to(socialMediaIcons.current[index], {
      rotate: 0, 
      duration: 0.5
    });
  };

  return (
  <footer className={styles.footer}>
    <div className={styles.container}>

      <div className={styles.formContainer}>

        <div className={styles.formHeader}>
      
          <h1><span className={styles.gradient}>Get In</span> Touch</h1>
          <br></br>
          <h3>Have a question? Inquiry? Send a message here.</h3>
          <br></br><br></br>

        </div>

        <Form/>

      </div>


      <div className={styles.socialMedia}>

        <a 
          href="https://discordapp.com/users/faroukade_73606" 
          onMouseEnter={() => handleHover(0)} 
          onMouseLeave={() => handleMouseLeave(0)}
        >
          <div>
            <h3>Discord</h3>
            <p>@faroukade_73606</p>
          </div>
          <FontAwesomeIcon 
            icon={faDiscord} 
            ref={el => socialMediaIcons.current[0] = el} 
            className={styles.socialMediaIcon}
          />
        </a>

        <a 
          href="https://www.linkedin.com/in/farouk-adeleke/" 
          onMouseEnter={() => handleHover(1)} 
          onMouseLeave={() => handleMouseLeave(1)}
        >
          <div>
            <h3>LinkedIn</h3>
            <p>@farouk-adeleke</p>
          </div>
          <FontAwesomeIcon 
            icon={faLinkedin} 
            ref={el => socialMediaIcons.current[1] = el} 
            className={styles.socialMediaIcon}
          />
        </a>

        <a 
          href="https://github.com/Fadeleke57" 
          onMouseEnter={() => handleHover(2)} 
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <div>
            <h3>Github</h3>
            <p>@Fadeleke57</p>
          </div>
          <FontAwesomeIcon 
            icon={faGithub} 
            ref={el => socialMediaIcons.current[2] = el} 
            className={styles.socialMediaIcon}
          />
        </a>

      </div>

      <p>&copy; All Rights Reserved - Farouk Adeleke.</p>
    </div>
  </footer>
  )
}

export default Footer