'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from 'react';

import styles from '../styles/Skills.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import test from '../../../public/background.jpg'

import react from '../../../public/photos/icons/react.svg'
import next from '../../../public/photos/icons/next.svg'
import html from '../../../public/photos/icons/html.svg'
import css from '../../../public/photos/icons/css.svg'
import unix from '../../../public/photos/icons/unix.svg'
import python from '../../../public/photos/icons/python.svg'
import java from '../../../public/photos/icons/java.svg'
import vercel from '../../../public/photos/icons/vercel.svg'
import javascript from '../../../public/photos/icons/javascript.svg'
import django from '../../../public/photos/icons/django.svg'


function Skills() {

    const my = useRef(null);
    const skills = useRef(null);
    const skillsSection = useRef(null);

    const gallery = useRef(null);
    const galleryWrapper = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
   
    useGSAP(() => {
        // only do animation on non-mobile screens
        if (gallery.current && galleryWrapper.current && window.innerWidth > 800) {
            // Calculate total gallery width
            let galleryWidth = gallery.current.offsetWidth;
            // Calculate amount to scroll horizontally
            let amountToScroll = galleryWidth - window.innerWidth;
    
            // Set the animation for the gallery
            gsap.to(gallery.current, {
                x: -amountToScroll,
                ease: "none",
                scrollTrigger: {
                    trigger: galleryWrapper.current,
                    start: "top 30%",
                    end: "+=" + amountToScroll,
                    pin: true,
                    scrub: true,
                }
            });
        

            gsap.from(my.current, {
                x: -10 + 'vw',
                ease: 'power1.in',
                scrollTrigger: {
                    trigger: skillsSection.current,
                    start: "top 55%",
                    end: '+=350',
                    scrub: true,
                }
            });

            gsap.from(skills.current, {
                x: 10 + 'vw',
                ease: "none",
                scrollTrigger: {
                    trigger: skillsSection.current,
                    start: "top 55%",
                    end: '+=350',
                    scrub: true,
                }
            });
        }
    }); 

  return (
    <div className={styles.skills} ref={skillsSection}>

        <section className={styles.hero}>
            <div className={styles.skillsHeader}>
            <h1 ref={my} className={styles.gradient}>My</h1>
            <h1 ref={skills}>Skills</h1>
                <p>
                   I believe anything can be learned through the internet, with projects to supplement gained knowledge. Below are some of the technical skills that I am currently well-versed in..
                </p>           
            </div>

        </section>

        <section ref={galleryWrapper} className={styles.galleryWrapper}>
            <div ref={gallery} className={styles.gallery}>
                <Image src={react} className={styles.galleryImg}/>
                <Image src={next} className={styles.galleryImg}/>
                <Image src={vercel} className={styles.galleryImg}/>
                <Image src={html} className={styles.galleryImg}/>
                <Image src={css} className={styles.css}/>
                <Image src={javascript} className={styles.js}/>
                <Image src={java} className={styles.galleryImg}/>
                <Image src={python} className={styles.galleryImg}/>
                <Image src={unix} className={styles.galleryImg}/>
                <Image src={django} className={styles.galleryImg}/>

            </div>
        </section>

    </div>
  )
}

export default Skills