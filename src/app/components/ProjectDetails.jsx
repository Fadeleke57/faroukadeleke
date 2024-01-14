'use client'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import '../styles/ProjectDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


function projectDetails() {
  return (
        <div className="tooltip">
    
        <FontAwesomeIcon icon={faInfoCircle} className='tooltip-activator'/>

        <div className="tooltip-popup">
        <h1>HJL-23</h1>
        <p>Time 21:34, December 1 2023</p>
        <a href="#">Postpone</a>
        <ul>
            <li>
            <span>Price</span>
            <span>54 900 P</span>
            </li>
            <li>
            <span>Distance</span>
            <span>1843 km</span>
            </li>
            <li>
            <span>Discount</span>
            <span>12%</span>
            </li>
            <li>
            <span>Fast Delivery</span>
            <span>Yes</span>
            </li>
        </ul>
        <h3>Delivery Address Info</h3>
        <div className="address-info">
            <p>215 E Tasman Dr Po Box 65502</p>
            <p>CA 95134 San Jose</p>
            <p>+7 (495) 333-43-64</p>
            <p>John Doe</p>
        </div>
        <button>Change</button>
        </div>
        
    </div>
  )
}

export default projectDetails