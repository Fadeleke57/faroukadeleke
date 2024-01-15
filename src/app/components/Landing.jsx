'use client'
import styles from '../styles/Landing.module.css'

import { Fade } from "react-awesome-reveal";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';

function Landing() {

  gsap.registerPlugin(ScrollTrigger);

  const namesRef = useRef(null);  //header ref
  
  const buRef = useRef(null); //'Boston University' ref
  const webDevRef = useRef(null); //'Web Development' ref

  const prefixRef = useRef(null) //'Student At' ref
  const prefix2Ref = useRef(null) //'Freelance' ref

  const introRef = useRef(null) // 'Hello! I'm' ref
  const intro2Ref = useRef(null) // 'I go by' ref

  // useGSAP cleans up animation automatically so its better than useEffect
  useGSAP(() => {

    const introSplit = new SplitType(introRef.current, {
      types: 'chars'
    })
    
    //intro animation switches between 'Hello! I'm' and 'I go by'
    gsap.to([introRef.current, intro2Ref.current], {
      y: "-110%", // moves up both texts by 100% so only 1 is showing at a time
      duration: 1,
      ease: "power2.out",
      yoyo: true, //so it goes back and forth
      yoyoEase: true, //smooooth
      repeat: 3
    });

    //array of characters made from header usinf SplitType object
    const split = new SplitType(namesRef.current, {
      types: "chars"
    });
    
    gsap.set(split.chars, {  //tweak gsap settings
      transformOrigin: "center center -50px", //determines radius and direction of rotation
      backfaceVisibility: "hidden" //hidden if you dont want to see back of letters during rotaion
    });

    //GSAP timeline: when animation is done reset settings so the 'e' rotation looks normal
    const tl = gsap.timeline({ repeat: 0, onComplete: resetSettings });

    //rotation of header
    tl.to(split.chars, {
      duration: 1.5,
      rotationX: "360",
      stagger: 0.1,
      delay: 0
    });
    //moves from color to black while animation occurs
    gsap.from(split.chars, {
      opacity: 0.8,
      stagger: 0.1,
      color: '#2e1edd'
    });

    const rotationE = split.chars[9]; // The first 'e' in 'Adeleke'
    const arterisk = split.chars[6]; //arterisk
    
    //timeline for the h1
    const headerTL = gsap.timeline({delay: 4, repeat: -1, repeatDelay: 1 }); // -1 = infinity repetitions
    
    gsap.to( arterisk, { //arterisk goes down and changes color
      delay: 2.5,
      y: '25%',
      color: '#2e1edd',
      duration: 0.8,
      ease: "bounce.out", //coolest ease by far
    });
    
    //'e' only turns a color while its rotating
    headerTL.to(rotationE, {
      rotationY: "540",
      color: '#2e1edd',
      duration: 1,
      ease: "linear"
    })
    .to(rotationE, {
      delay: 2,
      color: 'black',
      rotationY: "360",
      duration: 0.5, //fades into black
      ease: "linear",
      immediateRender: false
    });

    //subtitle animation timeline
    const subtitleTL = gsap.timeline({stagger: 1, repeat: 0});

    const prefix2Split = new SplitType(prefix2Ref.current, {
      types: 'chars'
    });

    subtitleTL.to(prefixRef.current, { //scales 'Student At' from 0 to normal
      opacity: 1,
      scaleY: 1,
      duration: 0.5,
    }) 
    .to(buRef.current, {
      x: '2%', // Moves 'Boston University' from behind mask
      duration: 1, 
      ease: "power2.out", //easing for moving out
    })
    .to(prefix2Split.chars, {
      opacity: 1,   //moves 'Freelance' up from behind mask
      y: '-100%',
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1
    })
    .to(webDevRef.current, {
      x: "2%", // moves 'Web Development' right from behind mask
      duration: 1,
      ease: "power2.out", 
    });
    
    function resetSettings() {  //function to reset GSAP settings so the 
      gsap.set(split.chars, {
        transformOrigin: "center center 0px", //'e' rotates on normal axis
        backfaceVisibility: 'visible' // so the user can see the back of the 'e'
      });
    }

  }, []);

  return (
    <section className={styles.landing}>

          <div className={styles.landingHeader}>

            <div className={styles.introMask}>
              <div className={styles.introContent} >
                <p ref={introRef}>{"Hello! I'm.."}</p>
                <p ref={intro2Ref} style={{marginTop: '0.2em'}}>Greetings!</p>
              </div>
            </div>

            <div>
              <h1 ref={namesRef}>Farouk * Adeleke</h1>
            </div>

            <div className={styles.subtitleAnimation} style={{marginTop: '1.5em'}}>
              <div className={styles.animationWrapper}>
                <div className={styles.maskPrefix}>
                  <p ref={prefixRef} style={{transform: 'scaleY(0)'}}>Student At</p>
                </div>

                <div className={styles.textMaskTop}>
                  <p ref={buRef} className={styles.textContent}>Boston University</p>
                </div>
              </div>
            </div>

            <div className={styles.subtitleAnimation}>
              <div className={styles.animationWrapper}>
                <div className={styles.maskPrefix}>
                  <p ref={prefix2Ref} style={{transform: 'translateY(100%)'}}>Freelance</p>
                </div>

                <div className={styles.textMask}>
                  <p ref={webDevRef} className={styles.textContent} >Web Development</p>
                </div>
              </div>
            </div>
          </div>

      <div className={styles.goDown}>
        <Fade triggerOnce delay={4000} direction='up'><Link href={'#Bio'} className={styles.goDowntext}><p>Explore</p></Link></Fade>
        <Fade triggerOnce delay={4000} direction='up'><Link href={'#Bio'} className={styles.goDowntext}><FontAwesomeIcon icon={faAngleDown} className={styles.icon} beatFade /></Link></Fade>
      </div>

      <Fade>
      <div className={styles.landingIcons}>
        
          <Link href={'https://github.com/Fadeleke57'} target='blank'>
          <FontAwesomeIcon icon={faGithub} className={styles.landingIcon}></FontAwesomeIcon>
          </Link>
      
          <Link href={'https://www.linkedin.com/in/farouk-adeleke/'} target='blank'>
          <FontAwesomeIcon icon={faLinkedin} className={styles.landingIcon}></FontAwesomeIcon>
          </Link>
       
      </div>
     </Fade>
    </section>
  )
}

export default Landing