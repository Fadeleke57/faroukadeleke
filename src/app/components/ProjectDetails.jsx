'use client'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Power2 } from 'gsap'
import '../styles/ProjectDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import dynamic from 'next/dynamic';


function projectDetails({pName, date, repository, features}) {

  const infoRef = useRef(null);

  useGSAP(() => {
    //fade in and out for info icons
    const infoTL = gsap.timeline({repeat: -1, yoyo: true, ease: "power2.inOut" })

    infoTL.to(infoRef.current, {
      opacity: 0.6,
      duration: 0.8,
    });
  });

  return (
    <div className="quick-tooltip">
        <FontAwesomeIcon ref={infoRef} icon={faInfoCircle} className='tooltip-activator'/>
        <div className="quick-tooltip-popup left">

            <h3>{pName}</h3>
            <h4>{date}</h4>
            
            <div className='features'>

                {features? 
                    features.map((feature, index) => (
                        <p key={index}>{feature}</p>
                    ))
                : ''}
                
            </div>   
        </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(projectDetails), {ssr: false})