'use client'
import {  useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import '../styles/ProjectDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic';

type ProjectData = {
  show: boolean;
  pName: string;
  date: string;
  features: string[];
  repository: string | null;
  demo: string |null;
}

type ProjectDeatilsProps = {
  info: ProjectData,
  onInfoClick: any,
  type : number
}

function ProjectDetails({info, onInfoClick, type} : ProjectDeatilsProps) {

  const infoRef = useRef(null);
  const features = info.features
  useGSAP(() => {
    //fade in and out for info icons
    const infoTL = gsap.timeline({repeat: -1, yoyo: true, ease: "power2.inOut" })

    infoTL.to(infoRef.current, {
      opacity: 0.6,
      duration: 0.8,
    });
  });

  if (type == 1) { //return the desktop icon
    return (
      <div className="quick-tooltip" onClick={onInfoClick}>
          <FontAwesomeIcon ref={infoRef} icon={faInfoCircle} className='tooltip-activator'/>
          <div className="quick-tooltip-popup left">
              <h3>{info.pName}</h3>
              <h5>{info.date}</h5>
              <div className='features'>
                {features &&
                  features.map((feature, index) => (
                      <p key={index}>{feature}</p>
                  ))} 
              </div>   
          </div>
      </div>
  )} //otherwise return the mobile one that displays the modal
  return (
    <div className="quick-tooltip" onClick={onInfoClick}>
        <FontAwesomeIcon 
            ref={infoRef} 
            icon={faInfoCircle} 
            className='tooltip-activator'
        />
    </div>
  )
}
//so the icon doesn't show up before its ready
export default dynamic (() => Promise.resolve(ProjectDetails), {ssr: false})