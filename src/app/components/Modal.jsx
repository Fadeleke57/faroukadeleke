'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import  {  useRef } from 'react';
import Link from 'next/link'
import '../styles/ProjectDetails.css'; // Importing the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ show, onClose, pName, date, features, repository, demo }) => {

  const modalRef = useRef(null);
  const projectArrows = useRef([])

  useGSAP(() => {
    if (show) {
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
    } else {
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in'
      });
    }
  }, [show]);

  
  //link arrow animation
  const handleHover = (index) => {
    gsap.to(projectArrows.current[index], {
        x: 30,
        duration: 0.2
    });
  };

  //resets when cursor leaves link
  const handleMouseLeave = (index) => {
    gsap.to(projectArrows.current[index], {
        x: 0,
        duration: 0.2
    });
  };
  
  if (!show) {
    return null;
  }
  return (
    <div className="modal-backdrop" ref={modalRef}>
    <FontAwesomeIcon icon={faXmark} onClick={onClose} className='exit-modal'/>
      <div className="modal-content">
            <h3>{pName}</h3>
            <p>{date}</p>
            <br></br>
            <Link 
                href={repository ? repository : ''} 
                target='blank' 
                onMouseEnter={() => handleHover(0)} 
                onMouseLeave={() => handleMouseLeave(0)}>
                <p className='gradient'>
                Code
                <FontAwesomeIcon 
                    icon={faArrowRight} 
                    style={{marginLeft: '0.5em', color: '#85c4ff'}} 
                    ref={el => projectArrows.current[0] = el} />
                </p>
            </Link>

            {demo ? 
                <Link 
                    href={demo} 
                    target='blank' 
                    onMouseEnter={() => handleHover(1)} 
                    onMouseLeave={() => handleMouseLeave(1)}>
                    <p className='gradient'>
                    Demo
                    <FontAwesomeIcon 
                        icon={faArrowRight} 
                        style={{marginLeft: '0.5em', color: '#85c4ff'}} 
                        ref={el => projectArrows.current[1] = el} />
                    </p>
                </Link> : 
            ''}
    
            <div className='features'>
                {features? 
                    features.map((feature, index) => (
                        <p key={index}>{feature}</p>
                    ))
                : ''}
                
            </div>   
        </div>
    </div>
  );
};

export default Modal;