'use client'

import Bio from './components/Bio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

import Lenis from '@studio-freight/lenis';
import { useEffect, useRef}  from 'react'
import { useGSAP } from "@gsap/react";

export default function Home() {

  useEffect(()=>{
    //Initialize Lenis smooth scrolling
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      
      <Navbar/>
      <Landing/>
      <Bio/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  )
}
