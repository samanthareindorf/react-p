/*import the component for react*/ 
import React from 'react'

/*import the contact.css file*/
import './contact.css'

/*import email icon */
import {FiMail} from 'react-icons/fi'

/*import call icon */
import {BsFillTelephoneFill} from 'react-icons/bs'

/*import emailjs for email */
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

 
const Contact = () => {


  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6i57djm', 'template_zx6xp0o', form.current, 'ZCF5tfoatOCL_8tIS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummy mail</h5>
            <a href="mailto:haslearnt@gmail.com" target='_blank'>Send a mail</a>
          </article>

          <article className="contact__option">
            <BsFillTelephoneFill className='contact__option-icon'/>
            <h4>Work Phone</h4>
            <h5>call me</h5>
            <a href="tel:+233551584465">+233551584465</a>
          </article>

        </div>
        {/* END OF CONTACT */}
        {/* <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full name' required />

          <input type="email" name='email' placeholder='Email' required  />

          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit Message</button>
        </form>
       */}



      </div>

    </section>
  )
}

export default Contact