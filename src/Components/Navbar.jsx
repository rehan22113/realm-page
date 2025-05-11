import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../styles/fonts.css';
import VoteModal from './VoteModal';

const Navbar = () => {

  const [scroll, setScroll] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header className={`text-white md:block hidden body-font sticky top-0 z-[888] transition-all duration-300 ${
        scroll ? "bg-black shadow-md" : "bg-black"
      }`} >
  <div className="container mx-auto flex justify-between py-5 px-5 flex-col md:flex-row items-center">
    <a href="/" className="flex title-font font-bold items-center text-white text-xl mr-2 mb-4 md:mb-0">
      <img src="/navbar-logo.webp" alt="logo" className="w-32" />
    </a>
    <nav className="md:py-1 md:pl-4 flex flex-wrap items-center justify-center uppercase text-sm font-bold glory-font">
      <a href='/#' className="px-4 py-2 mx-2 hover:bg-[#1F1F1F] rounded-md transition-all duration-300">Home</a>
      <a href='/#tiles' className="px-4 py-2 mx-2 hover:bg-[#1F1F1F] rounded-md transition-all duration-300">Games</a>
      <a href='/#hosting' className="px-4 py-2 mx-2 hover:bg-[#1F1F1F] rounded-md transition-all duration-300">Hosting</a>
      <div className="leaderboard-dropdown px-4 py-2 mx-2 hover:bg-[#1F1F1F] rounded-md transition-all duration-300">
        <span>Leaderboards</span>
        <div className="dropdown-content pb-8">
          <div className="dropdown-header h-[100px]">
            <img src="https://res.cloudinary.com/dsbups4jj/image/upload/v1745681011/realms_apufac.png" alt="Realms" className="w-full h-auto object-contain py-2" />
          </div>
          <a href="/#tiles" className="dropdown-item">
            <span className="gold">Hall of Fame</span>
          </a>
          <a href="/#tiles" className="dropdown-item">
            <span className="red">Hall of Shame (Bans)</span>
          </a>
        </div>
      </div>
      <a href='/#work' className="px-4 py-2 mx-2 hover:bg-[#1F1F1F] rounded-md transition-all duration-300">Team</a>
     
    </nav>
    <div className='flex md:mt-0 mt-2 '>
    
    {/* <a href='mailto:realmsupport@glitchbox.net' target='_blank' className="inline-flex items-center bg-[#D1363A] rounded-full pt-1 pb-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 hover:text-black text-base md:mt-0">Contact us
     
     </a> */}
      {/* vote now button */}
     <button onClick={() => setIsVoteModalOpen(true)} className="mt-3 text-indigo-500 inline-flex hover:scale-105 transition-all">
          <LazyLoadImage
             effect="blur"  height="auto"
      width="100%" src='https://res.cloudinary.com/dsbups4jj/image/upload/v1745680774/cta_vote_xwfykt.png' className=' lg:w-40 w-32' />
        </button>
        <VoteModal isOpen={isVoteModalOpen} onClose={() => setIsVoteModalOpen(false)} />
    </div>
  </div>
</header>

  )
}

export default Navbar