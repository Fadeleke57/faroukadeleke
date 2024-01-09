'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import styles from '../styles/Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Fade } from "react-awesome-reveal";

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

    const projectArrows = useRef([])

    gsap.registerPlugin(ScrollTrigger) 

    useGSAP(() => {

      // splits the title text into individual characters
      const titleText = new SplitType(title.current, {
        types: "chars"
      });

      if (title.current) {
        // title animation
        gsap.to(titleText.chars, {
          y: -300, // letter moves up 300 pixels
          stagger: 0.1, //staggers the split letters
          scrollTrigger: {
            trigger: heroSection.current, //start of section begins animation
            start: "top 13%", //starting point -- top of the view box is at the top of trigger
            scrub: true, //follows the scroll bar
            pin: true, //fixes the trigger element until the animation is done
          },
        });      
        
        const subTitleText = new SplitType(subtitle.current, {
          types: "words"
        });

        // subtitle animation
        gsap.from(subTitleText.words, {
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

        //footer animation
        gsap.from(footerDiv.current, {
          y: 300,
          opacity: 0,
          //delays each div animation by 0.5 seconds
          scrollTrigger: {
            trigger: footer.current,
            start: "top bottom",
            //restarts the animation when scrolling back
            toggleActions: "play none none none",
          },
        });
    
      }

    });

    const handleHover = (index) => {
      gsap.to(projectArrows.current[index], {
        x: 30,
        duration: 0.2
    })
    };
  
    //resets
    const handleMouseLeave = (index) => {
      gsap.to(projectArrows.current[index], {
        x: 0,
        duration: 0.2
      });
    };

  return (
    <div className={styles.projects}>

      <section ref={heroSection} className={styles.hero} id='Bio'>

        <h1 ref={title} className={styles.title}><span className={styles.gradient}>My</span> Projects</h1>
        <p ref={subtitle} className={styles.subTitle}>
          I strive to put one-hundred percent effort into every project that I delve into, focusing on honing my skills over subpar work. Below are some of the projects I have completed in and outside of the classroom. 
        </p>

      </section>

      {
        /* LSTM */
      }

      <section className={styles.services}>

        <div className={styles.serviceAnim}>

          <div>

            <Link href={'https://github.com/Fadeleke57/bonsai-finance-app'} target='blank'>
              <div 
                className={styles.projectHeader}
                onMouseEnter={() => handleHover(0)} 
                onMouseLeave={() => handleMouseLeave(0)}
              >
                <h2>
                REST API For Predicting Next-Day Stock Price <FontAwesomeIcon 
                  icon={faArrowRight} 
                  ref={el => projectArrows.current[0] = el}
                  className={styles.projectArrow}
                />
                </h2>
              </div>
            </Link>

            <p>
              Specialized stock price prediction tool using PyTorch and NumPy, focusing on LSTM neural networks to analyze and predict stock market trends.
            </p>

          </div>
          <Image src={photo} className={styles.servicesImg}/>
        </div>

      {
        /*BONSAI FINANCE*/
      }

        <div className={styles.serviceAnim}>

          <div>

            <Link href={'https://stock-tracking-app.vercel.app/'} target='blank'>
              <div 
                className={styles.projectHeader}
                onMouseEnter={() => handleHover(1)} 
                onMouseLeave={() => handleMouseLeave(1)}
                >
                <h2>
                Bonsai Finance 
                <FontAwesomeIcon 
                icon={faArrowRight} 
                ref={el => projectArrows.current[1] = el} 
                className={styles.projectArrow}
                />
                </h2>
              </div>
            </Link>

            <p>
              Platform powered by the AlphaVantage API, offering real-time stock information and relavant news to users.
            </p>
       
          </div>
          <Image src={photo} className={styles.servicesImg}/>
        </div>

      {
        /**CATTRAIL */
      }

        <div className={styles.service}>
          <div>

            <Link href={'https://www.cattrail.com/'} target='blank'>
              <div 
                className={styles.projectHeader}
                onMouseEnter={() => handleHover(2)} 
                onMouseLeave={() => handleMouseLeave(2)}
                >
                <h2>
                Investment Management Company Site
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  ref={el => projectArrows.current[2] = el}
                  className={styles.projectArrow}
                />
                </h2>
              </div>
            </Link>

            <p>
              Website built with NextJs for Cat Trail Capital LLC, an investment management company. Deployed on Vercel.
            </p>

          </div>
          <Image src={photo} className={styles.servicesImg}/>
        </div>

      </section>

      {
        /**BOTTOM TEXT */
      }
      <footer ref={footer} className={styles.footer}>
        <div ref={footerDiv}>

        <Fade direction='up' triggerOnce>
          <h2>There's More!</h2>
          <p>To learn more about a particular project or to view my full array of repositories, visit my github at 
          <Link 
            href={'https://github.com/Fadeleke57?tab=repo'} 
            target='blank'
            onMouseEnter={() => handleHover(3)} 
            onMouseLeave={() => handleMouseLeave(3)}
            style={{marginLeft: 6 + 'px'}}
          >
            https://github.com/Fadeleke57 
            <FontAwesomeIcon 
              icon={faArrowRight} 
              ref={el => projectArrows.current[3] = el}
              className={styles.projectArrow}
            />
          </Link>
          </p>
        </Fade>

        </div>
      </footer>

    </div>
  )
}

export default Projects