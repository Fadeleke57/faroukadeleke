'use client'

import React, {useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Form.module.css'

// Form component
export const Form = () => {
  const formRef = useRef(null);
  const [isMessageSent, setIsMessageSent] = useState(false);

  // Function to send email
  const sendEmail = (e : any) => {
  e.preventDefault();
  // Get all needed elements from the DOM
  const form = e.target;
  const nameInput = form.querySelector("#user_name");
  const emailInput = form.querySelector("#user_email");
  const messageInput = form.querySelector("#message");

  // Get needed data from email JS
  const publicKey = "iDWeRGfz2ZBgjaR8R";
  const serviceID = "service_4nr4jqa";
  const templateID = "template_u9dom7i";

  // Initialize email JS with public key (if not initialized already)
  emailjs.init(publicKey);

  // Get all input field values
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Send the email (Add service, template ID, and input field values)
  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      // Handle success: Change button text, clear input fields, or any other actions
      console.log("Message Sent Successfully");
      form.reset(); // Clear the form
      setIsMessageSent(true);

      // Reset the state after 3 seconds
      setTimeout(() => {
        setIsMessageSent(false);
      }, 3000);
    })
    
    .catch((error) => {
      // Handle error: Console log the error, change button text, or any other actions
      console.log(error);
      console.log("Something went wrong");
      setIsMessageSent(false);
    });
  };

  return (
    <form id="contact-form" className={styles.form} ref={formRef} onSubmit={sendEmail}>
    <div>
      <p ><input id="user_name" placeholder="Enter your name.." name="name" autoComplete="true" type="Full Name"/></p>
    </div>
    <div>    
      <p ><input id="user_email" placeholder="Enter your email.." name="email" autoComplete="true" type="Email"/></p>
    </div>
    <div>
      <p><input id="message" placeholder="What would you like to tell me.." name="message" style={{minHeight: '10em'}} type="Message"></input></p>  
    </div>
    <div>
      <button type="submit" className={isMessageSent ? styles.success : styles.formButton}>{isMessageSent ? "Message Sent Successfully" : "Send Message" }</button> 
    </div>
    </form>
  );
};

export default Form;