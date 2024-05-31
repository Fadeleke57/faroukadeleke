'use client'
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';

import Arrow from './Arrow';
import styles from '../styles/Projects.module.css';

import Modal from './Modal';
import Project from './Project';
import projects from '../../../public/projects.json'
import FeaturedProject from './FeaturedProject';
import fp from '../../../public/featuredProjects.json'; //list of featured projects in json

function Projects() {
    gsap.registerPlugin(ScrollTrigger) 
    const heroSection = useRef(null) //ref for title and subtitle box
    const title = useRef(null) //header ref
    const subtitle = useRef(null) //subtitle ref
    const footer = useRef(null) //footer box ref
    const endBox = useRef(null) //footer 
    const textContent = useRef(null) //footer text to be translated up

    type ModalContent = {
      show : boolean,
      pName: string,
      date : string,
      features: string[],
      repository: string | null,
      demo : string | null
    }

    const [modalContent, setModalContent] = useState<ModalContent>({
      show: false,
      pName: '',
      date: '',
      features: [''],
      repository: null,
      demo: null
    });
    const openModal = (projectDetails : ModalContent) => {
      setModalContent({ ...projectDetails});
    };
    const closeModal = () => {
      setModalContent(prevState => ({ ...prevState, show: false }));
    };
    useGSAP(() => {
      if (window.innerWidth > 850) {
        // splits the title text into individual characters
        if (title.current) {
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
        }

        if (subtitle.current) {

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
      }
      //adds all animated sections to an array
      const services : HTMLElement[] = gsap.utils.toArray('.' + styles.serviceAnim);
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
          toggleActions: "play none none none", //only plays once
        },
      });

    });

    return (
      <div className={styles.projects}>
        
        <section ref={heroSection} className={styles.hero}> {/**GSAP animation header */}
          <div ref={title}><h1 className={styles.title}><span className={styles.gradient}>Latest</span> Projects</h1></div>
          <p ref={subtitle} className={styles.subTitle}>
            I strive to put one-hundred percent effort into every project that I delve into, focusing on honing my skills over subpar work. Below are some of the projects I have completed outside of the classroom.. 
          </p>
        </section>

        <section className={styles.services}>   
          {fp.map((project, id) => (
            <div key={id}>
            <FeaturedProject 
              title={project.title}
              repo={project.repo}
              demo={project.demo}
              date={project.date}
              projectFeatures={project.projectFeatures}
              imageSrc={project.imageSrc}
              description={project.children}
              animated={id < 2 ? true : false}
              onInfoClick={() => openModal({
                show: true, 
                pName: project.title, 
                date : project.date, 
                features : 
                project.projectFeatures, 
                repository : project.repo, 
                demo : project.demo
              })}
            />
            </div>
          ))}
        </section>

        <div ref={footer} className={styles.footer}>
          <div ref={endBox}> 
            <div className={styles.textMask}> {/* for gsap*/}
              <div ref={textContent} className={styles.textContent}>
                <h2>{"There's More!"}</h2>
                <Arrow link='https://github.com/Fadeleke57?tab=repo' tag='h2'>
                  To learn more about a particular project or to view my full array of repositories, visit my github
                </Arrow>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content_wrapper}>
          {projects.map((project, id) => (
            <div key={id}>
            <Project
              codeLink={project.codeLink}
              demoLink={project.demoLink}
              title={project.title}
              description={project.description}
              image={project.image}
              skills={project.skills}
            />
            </div>
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