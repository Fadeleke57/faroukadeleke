'use client'

import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef } from 'react';
import styles from '../styles/Skills.module.css'
import Image from 'next/image'
import react from '../../../public/photos/react.png'
import next from '../../../public/photos/icons/next.svg'
import html from '../../../public/photos/html.png'
import css from '../../../public/photos/css.png'
import unix from '../../../public/photos/linux.png'
import python from '../../../public/photos/icons/python.svg'
import java from '../../../public/photos/java.png'
import javascript from '../../../public/photos/js.png'
import django from '../../../public/photos/icons/django.svg'
import c from '../../../public/photos/icons/c.svg'
import types from '../../../public/photos/typescript.png'


function Skills() {
    gsap.registerPlugin(ScrollTrigger);
    const my = useRef(null);
    const skills = useRef(null);
    const skillsSection = useRef(null);
    const gallery = useRef(null);
    const galleryWrapper = useRef(null);
    const skillIcons = [react, next, python, java, c, django, html, css, javascript, unix, types]
   
    useGSAP(() => {
        if (gallery.current && galleryWrapper.current && (window.innerWidth > 1100)) { // only do animation on non-mobile screens
            console.log(window.innerWidth)
            let galleryWidth = gallery.current.offsetWidth; // calculate total gallery width
            let amountToScroll = galleryWidth - window.innerWidth; // calculate amount to scroll horizontally
    
            gsap.to(gallery.current, {  // set the animation for the gallery
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
            <div ref={gallery} className={styles.gallery} >
                {skillIcons.map((icon, id) => (
                    <Image src={icon} className={styles.galleryImg} alt={icon} key={id}/>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Skills