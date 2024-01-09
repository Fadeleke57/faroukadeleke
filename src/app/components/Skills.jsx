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

function Skills() {

    const gallery = useRef(null);
    const galleryWrapper = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        // Ensure elements are loaded
        if (gallery.current && galleryWrapper.current) {
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
                    start: "top 20px",
                    end: "+=" + amountToScroll,
                    pin: true,
                    scrub: true,
                }
            });
        }
    });

  return (
    <div className={styles.skills}>

        <section className={styles.hero}>
            <div>
            <h1><span className={styles.gradient}>My</span> Skills</h1>
            <h3>Some of my tecnhical and interpersonal skills...</h3>            
        
            </div>

        </section>

        <section ref={galleryWrapper} className={styles.galleryWrapper}>
            <div ref={gallery} className={styles.gallery}>
                <Image src={test} className={styles.galleryImg}/>
                <Image src={test} className={styles.galleryImg}/>
                <Image src={test} className={styles.galleryImg}/>
                <Image src={test} className={styles.galleryImg}/>
                <Image src={test} className={styles.galleryImg}/>
                <Image src={test} className={styles.galleryImg}/>
                <Image src={test} className={styles.galleryImg}/>
                <Image src={test} className={styles.galleryImg}/>
            </div>
        </section>

    </div>
  )
}

export default Skills