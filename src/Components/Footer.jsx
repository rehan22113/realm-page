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
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} Glitch Box —
      <a href="https://glitchbox.net" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Powered by GLITCHBOX</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
    <FaDiscord size={20} />
    <FaXTwitter size={20}/>
    <FaInstagram size={20} />
    <FaLinkedin size={20} />
    <FaFacebook size={20} />
     
    </span>
  </div>
</footer>

</>
  )
}

export default Footer