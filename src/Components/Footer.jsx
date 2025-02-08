import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
   <footer className="text-white bg-[#141414] body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <a href="/" className="flex title-font font-bold items-center text-white text-xl mr-2 mb-4 md:mb-0">
      <img src="/footer-logo.png" alt="logo" className="w-32" />
    </a>
    <p className="text-sm text-center md:text-left text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} Glitched Realms —
      <a href="https://glitchbox.net" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Powered by GLITCHBOX</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
    <a href='https://discord.gg/nmmr3CHRZJ' target='_blank'>
     <FaDiscord size={20} />
    </a>
    <a href='https://x.com/glitchedreamsofficial' target='_blank'>
    <FaXTwitter size={20}/>
    </a>
    <a href='https://www.instagram.com/glitchedreamsofficial' target='_blank'>
    <FaInstagram size={20} />
    </a>
    <a href='https://www.linkedin.com/glitchedreamsofficial' target='_blank'>
    <FaLinkedin size={20} />
    </a>
    <a href='http://facebook.com/glitchedreamsofficial' target='_blank'>
    <FaFacebook size={20} />
    </a>
     
    </span>
  </div>
</footer>

</>
  )
}

export default Footer