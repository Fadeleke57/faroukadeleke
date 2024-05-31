'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import  {  useRef } from 'react';
import '../styles/ProjectDetails.css'; // Importing the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Arrow from './Arrow';

type ModalProps = {
  show : boolean,
  onClose : any,
  pName : string,
  date : string,
  features : string[],
  repository : string | null,
  demo : string | null
}
const Modal = ({ show, onClose, pName, date, features, repository, demo } : ModalProps) => {

  const modalRef = useRef(null);

  useGSAP(() => {
    if (show) {
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
    } 
    else {
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in'
      });
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop" ref={modalRef} onClick={onClose}>
      <FontAwesomeIcon icon={faXmark} onClick={onClose} className='exit-modal'/>
      <div className="modal-content">
          <h3>{pName}</h3>
          <p>{date}</p>
          <br></br>
          {repository && <Arrow link={repository} tag='p' color='white'>Code</Arrow>}
          {demo && <Arrow link={demo} tag='p' color='white'>Demo</Arrow>}
          <div className='features'>
            {features && 
                features.map((feature, index) => (
                    <p key={index}>{feature}</p>
                ))}
          </div>   
        </div>
    </div>
  );
};

export default Modal;