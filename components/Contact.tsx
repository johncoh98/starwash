import React from 'react'
import ContactForm from './ContactForm'
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaSnapchat } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Contact = () => {
  return (
    <div id='contact' className='sm:flex sm:justify-around bg-zinc-800 w-screen' >

      <div className='px-4 ' >
        <h1 className='text-zinc-50 text-2xl py-8'>Laissez-nous un message !</h1>
        <ContactForm />
        </div>
        <div className=" rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center justify-center">
      <div className="px-8">
        <h2 className="text-2xl font-bold text-zinc-50 mb-2">Notre Adresse</h2>
        <p className="text-zinc-50 mb-4">
          <IoLocationSharp className="inline-block mr-2 text-cyan-400" /> <h2 className="text-xl text-zinc-50 mb-2">1 bd eugene decros 93260 Les Lilas </h2>
          <IoLocationSharp className="inline-block mr-2 text-cyan-400" /> <h2 className="text-xl text-zinc-50 mb-2">10 av Faidherbe 93260 Les Lilas </h2>
        </p>
      </div>
      <div className="px-8">  
        <h2 className="text-2xl pr-32 md:pr-0 font-bold text-zinc-50 mb-2">Contactez-nous</h2>
        <p className="text-zinc-50 mb-4">
          <FaPhone className="inline-block mr-2 text-cyan-400" /> <a href="tel:+33604090909" className='hover:text-cyan-700'>06 04 09 09 09</a>
        </p>
        <p className="text-zinc-50 mb-4">
       <a href="https://wa.me/33604090909" className='hover:text-cyan-700'><FaWhatsapp className="inline-block mr-2 text-cyan-400"/>Whatsapp</a>
        </p>
        <p className="text-zinc-50 mb-4">
       <a href="https://www.instagram.com/starwashparis/"className='hover:text-cyan-700'><FaInstagram className="inline-block mr-2 text-cyan-400"/>Instagram</a>
        </p>
        <p className="text-zinc-50 mb-4">
       <a href="https://www.snapchat.com/add/starwashparis" className='hover:text-cyan-700'><FaSnapchat className="inline-block mr-2 text-cyan-400"/>Snapchat</a>
        </p>
        <p className="text-zinc-50 mb-4">
          <FaEnvelope className="inline-block mr-2 text-cyan-400" /> <a href="mailto:Starwash.paris@gmail.com" className='font-bold hover:text-cyan-800'>Starwash.paris@gmail.com</a>
        </p>
      </div>
    </div> 
    </div>
  )
}

export default Contact