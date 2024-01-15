'use client'
import {  useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import '../styles/ProjectDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import dynamic from 'next/dynamic';


function projectDetails({onClick, pName, date, repository, features, type}) {

  const infoRef = useRef(null);

  useGSAP(() => {
    //fade in and out for info icons
    const infoTL = gsap.timeline({repeat: -1, yoyo: true, ease: "power2.inOut" })

    infoTL.to(infoRef.current, {
      opacity: 0.6,
      duration: 0.8,
    });
  });

  // if type == 1 return the desktop icon
  if (type == 1) {
    return (
        <div className="quick-tooltip">
            <FontAwesomeIcon ref={infoRef} icon={faInfoCircle} className='tooltip-activator'/>

            <div className="quick-tooltip-popup left">
                <h3>{pName}</h3>
                <h5>{date}</h5>
                
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
  } //otherwise return the mobile one that displays the modal
  return (
    <div className="quick-tooltip" onClick={onClick}>
        <FontAwesomeIcon 
            ref={infoRef} 
            icon={faInfoCircle} 
            className='tooltip-activator'
        />
    </div>
  )

}
//so the icon doesn't show up before its ready
export default dynamic (() => Promise.resolve(projectDetails), {ssr: false})