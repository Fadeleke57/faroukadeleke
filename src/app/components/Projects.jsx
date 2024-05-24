'use client'
import React,{ useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import styles from '../styles/Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import network from '../../../public/photos/network.jpg'
import deepface from '../../../public/projectImage/deepface.png'
import dfw from '../../../public/projectImage/dekker.png'

import { useGSAP } from "@gsap/react";
import Link from 'next/link';

import Info from './ProjectDetails';
import Modal from './Modal';
import Project from './Project';
import projects from '../../../public/projects.json'

  function Projects() {
    gsap.registerPlugin(ScrollTrigger) 
  
    const heroSection = useRef(null) //ref for title and subtitle box
    const title = useRef(null) //header ref
    const subtitle = useRef(null) //subtitle ref

    const footer = useRef(null) //footer box ref
    const endBox = useRef(null) //footer 

    const textContent = useRef(null) //footer text to be translated up

    const projectArrows = useRef([]) //all the arrows in Projects.jsx

    const [modalContent, setModalContent] = useState({
      show: false,
      pName: '',
      date: '',
      features: [],
      repository: '',
      demo: ''
    });

    const openModal = (projectDetails) => {
      setModalContent({ ...projectDetails, show: true });
    };
    
    const closeModal = () => {
      setModalContent(prevState => ({ ...prevState, show: false }));
    };

   
    useGSAP(() => {
      if (window.innerWidth > 850) {
        // splits the title text into individual characters
        const titleText = new SplitType(title.current, {
          types: "chars"
        });
        // title animation
        gsap.to(titleText.chars, {
          y: -300, // letter moves up 300 pixels
          stagger: 0.1, //staggers the split letters
          scrollTrigger: {
            trigger: heroSection.current, //start of section begins animation
            start: "top 13%", //starting point -- top of the view box is at the 13% from top of trigger
            scrub: true, //follows the scroll bar
            pin: true, //fixes the trigger element until the animation is done
          },
        });      
        
        const subTitleText = new SplitType(subtitle.current, { //words instead of chars so letters dont get cut off
          types: "words" 
        });

        // subtitle animation
        gsap.from(subTitleText.words, {
          opacity: 0.2, //chars become become black as user scrolls
          stagger: 0.1,
          scrollTrigger: {
            trigger: heroSection.current,
            start: "top 30%",
            scrub: true,
          },
        });
      }
    
      //adds all animated sections to an array
      const services = gsap.utils.toArray('.' + styles.serviceAnim);
      //loops through each service element
      services.forEach(service => {
        //services animation
        gsap.to(service, {
          scale: 0.8,
          yPercent: -10,
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
      gsap.to(textContent.current, {
        y: "0%", //text goes back to original
        scrollTrigger: {
          trigger: footer.current,
          start: "top 70%",
          duration: 1.4,
          toggleActions: "play none none none", //only plays once
        },
      });

    });

    //link arrow animation
    const handleHover = (index) => {
      gsap.to(projectArrows.current[index], {
        x: 30,
        duration: 0.2
    })
    };
    
    //resets when cursor leaves link
    const handleMouseLeave = (index) => {
      gsap.to(projectArrows.current[index], {
        x: 0,
        duration: 0.2
      });
    };

    //modal animations
    const modalRef = useRef(null);

    const handleClose = () => {
      gsap.to(modalRef.current, {
          scaleY: 0,
          duration: 1,
          ease: 'power2.in'
      });
    };
  
    const handleOpen = () => {
      gsap.to(modalRef.current, {
          scaleY: 1,
          duration: 1,
          ease: 'power2.in'
      });
    }; 

    //features for each project
    const lstmFeatures = [ "Pytorch", "AlphaVantage","LSTM", "RNN", "REST API", "Django Rest Framework", "NumPy"];

    const bfFeatures = [ "Python", "OpenCV","Camera View", "Threading"];

    const ctFeatures = [ "Next.js", "Vercel","GSAP", "Project Management", "Agile", "Express.js", "Figma"];

  return (
    <div className={styles.projects}>
      
      {/**GSAP animation header */}

      <section ref={heroSection} className={styles.hero}>
        <div ref={title}><h1 className={styles.title}><span className={styles.gradient}>Latest</span> Projects</h1></div>
        <p ref={subtitle} className={styles.subTitle}>
          I strive to put one-hundred percent effort into every project that I delve into, focusing on honing my skills over subpar work. Below are some of the projects I have completed outside of the classroom.. 
        </p>
      </section>

      {/*deep face Project*/}

      <section className={styles.services}>   
        <div className={styles.serviceAnim}>
          <div className={styles.serviceHeaderBox}>

            <div className={styles.infoBox}>
            <Info 
                  onClick={() => openModal({
                    pName: 'Deep-Face',
                    date: '03/24 - Ongoing',
                    features: bfFeatures,
                    repository: 'https://github.com/Fadeleke57/deep-face',
                  })}
              />
            </div>
            <Link href={'https://github.com/Fadeleke57/deep-face'} target='blank'>
              <div 
                className={styles.projectHeader}
                onMouseEnter={() => handleHover(1)} 
                onMouseLeave={() => handleMouseLeave(1)}
                >
                <h2>
                Face-Recognition Program
                <FontAwesomeIcon 
                icon={faArrowRight} 
                ref={el => projectArrows.current[1] = el} 
                className={styles.projectArrow}
                />
                </h2>
              </div>
            </Link>

            <p className={styles.serviceText}>
             Python program using deepFace (face recognition and facial attribute analysis framework) to verify camera view with reference photo.
            </p>
       
          </div>
          <div className={styles.imageBox}>
            <Image src={deepface} className={styles.servicesImg} alt='deep face'/>
            <div className={styles.infoBoxMobile}>
              <Info 
                  onClick={() => openModal({
                    pName: 'Deep-Face',
                    date: '03/24 - Ongoing',
                    features: bfFeatures,
                    repository: 'https://github.com/Fadeleke57/deep-face',
                  })}
              />
            </div>
          </div>
        </div>

        {/* LSTM Project */}

        <div className={styles.serviceAnim}>
          <div className={styles.serviceHeaderBox}>

            <div className={styles.infoBox}>
            <Info 
                onClick={() => openModal({
                  pName: 'LSTM API',
                  date: '08/23 - Ongoing',
                  features: lstmFeatures,
                  repository: 'https://github.com/Fadeleke57/bonsai-finance-app'
                })}
              />
            </div>

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

            <p className={styles.serviceText}>
              Specialized stock price prediction tool using PyTorch and NumPy, focusing on LSTM neural networks to analyze and predict stock market trends.
            </p>

          </div>

          <div className={styles.imageBox}>
            <Image src={network} className={styles.servicesImg} alt='neural network'/>
              <div className={styles.infoBoxMobile}>
              <Info 
                onClick={() => openModal({
                  pName: 'LSTM API',
                  date: '08/23 - Ongoing',
                  features: lstmFeatures,
                  repository: 'https://github.com/Fadeleke57/bonsai-finance-app'
                })}
              />
            </div>
          </div>

        </div>

      {/**CATTRAIL Project */}

        <div className={styles.service}>
          <div className={styles.serviceHeaderBox}>

            <div className={styles.infoBox}>
            <Info 
                onClick={() => openModal({
                  pName: 'Dekker Foundation Website',
                  date: '03/24 - 04/24',
                  features: ctFeatures,
                  repository: 'https://github.com/Fadeleke57/cattrail',
                  demo: 'https://dekker-8qc6.vercel.app/'
                })}
              />
            </div>

            <Link href={'https://dekker-8qc6.vercel.app/'} target='blank'>
              <div 
                className={styles.projectHeader}
                onMouseEnter={() => handleHover(2)} 
                onMouseLeave={() => handleMouseLeave(2)}
                >
                <h2>
                Private Foundation Website
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  ref={el => projectArrows.current[2] = el}
                  className={styles.projectArrow}
                />
                </h2>
              </div>
            </Link>

            <p className={styles.serviceText}>
              Website built with NextJs for the Dekker Foundation, a private foundation endowed by the Dekker family. Deployed on Vercel.
            </p>

          </div>

          <div className={styles.imageBox}>
            <Image src={dfw} className={styles.servicesImg} alt='Dekker Foundation'/>
            <div className={styles.infoBoxMobile} >
              <Info 
                onClick={() => openModal({
                  pName: 'Dekker Foundation Website',
                  date: '03/24 - 04/24',
                  features: ctFeatures,
                  repository: 'https://github.com/Fadeleke57/dekker',
                  demo: 'https://dekker-8qc6.vercel.app/'
                })}
              />
            </div>
          </div>

        </div>

      </section>

      {/**BOTTOM TEXT */}

      <div ref={footer} className={styles.footer}>
        <div ref={endBox}> 
          <div className={styles.textMask}>
            <div ref={textContent} className={styles.textContent}>
              <h2>{"There's More!"}</h2>
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
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content_wrapper}>
        {projects.map((project, id) => (
          <Project
            codeLink={project.codeLink}
            demoLink={project.demoLink}
            title={project.title}
            description={project.description}
            image={project.image}
            skills={project.skills}
            key={id}
          />
        ))}
      </div>

      <Modal
        show={modalContent.show}
        onClose={closeModal}
        pName={modalContent.pName}
        date={modalContent.date}
        features={modalContent.features}
        repository={modalContent.repository}
        demo={modalContent.demo}
      />

    </div>
  )
}

export default Projects