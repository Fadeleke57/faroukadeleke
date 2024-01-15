'use client'

import Bio from './components/Bio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Projects from './components/Projects'
import Skills from './components/Skills'

import Lenis from '@studio-freight/lenis';
import { useEffect, useRef}  from 'react'
import { useGSAP } from "@gsap/react";

export default function Home() {

  useEffect(()=>{
    //initialize Lenis smooth scrolling
    const lenis = new Lenis();

    function raf(time: number) { //makes animations smoother without paying for GSAP smooth scroll
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
      // Reload page on window resize
      const handleResize = () => {
        window.location.reload();
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <main>
      <Landing/>
      <Bio/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  )
}
