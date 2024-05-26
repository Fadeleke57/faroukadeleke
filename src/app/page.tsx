'use client'

import Bio from './components/Bio'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Projects from './components/Projects'
import Skills from './components/Skills'

import Lenis from '@studio-freight/lenis';
import { useEffect, useRef}  from 'react'
import { useGSAP } from "@gsap/react";

export default function Home() {

  useGSAP(()=>{
    //initialize Lenis smooth scrolling
    const lenis = new Lenis();

    function raf(time: number) { //makes animations smoother without paying for GSAP smooth scroll
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const list = [1,2]
  return (
    <main>
      <Landing/>
      <Bio/>
      <Projects/>
      <Skills/>
      <Footer/>
    </main>
  )
}
