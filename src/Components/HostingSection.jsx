import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from './Modal';

const HostingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="hosting" className="text-gray-100 body-font py-8 md:py-16">
      <div className="container mx-auto flex md:flex-row flex-col items-center px-5">
        {/* Left side with text and button */}
        <div 
          className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center p-8 rounded-lg shadow-lg"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-6 font-bold text-white glory-font">
            Create, conquer, and control your own world.
          </h1>
          <p className="mb-8 leading-relaxed text-xl text-gray-300">
            Host a Minecraft server in minutes!
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="metal-button w-64 h-16 bg-gradient-to-b from-[#717b84] to-[#28313a] border border-[#60676f] rounded-2xl cursor-pointer transition-all hover:scale-[1.02] text-black font-bold uppercase text-xl shadow-md flex justify-center items-center"
            >
              GET YOUR SERVER
            </button>
          </div>
        </div>
        
        {/* Right side with image */}
        <div 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-full p-8 rounded-lg shadow-lg" 
          data-aos="fade-left" 
          data-aos-easing="ease-in-sine" 
          data-aos-duration="1000"
        >
          <LazyLoadImage
            effect="blur"
            height="auto"
            width="100%"
            className="object-cover object-center rounded"
            src="https://res.cloudinary.com/dsbups4jj/image/upload/v1745760409/glib_sec_o_lizssd.png"
            alt="Minecraft Server"
          />
        </div>
        
        {/* Modal with Google Form */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScKIi8V_joF6DCy1MnQFFyTf0_lmNWsfg1BULu1J7YwgeZ53Q/viewform?embedded=true"
            className="w-full h-full rounded-lg"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading...
          </iframe>
        </Modal>
      </div>
    </section>
  );
};

export default HostingSection;