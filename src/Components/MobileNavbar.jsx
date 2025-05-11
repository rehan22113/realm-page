import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import VoteModal from './VoteModal';
import 'react-modern-drawer/dist/index.css'

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isVoteModalOpen, setIsVoteModalOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <header className='md:hidden block sticky top-0 z-[888] bg-[#101010b0]'>
    <div className="flex items-center justify-between px-4 py-3 sticky top-0 z-40 ">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
      <a href="/" className="flex title-font font-bold items-center text-white text-xl mr-2 mb-4 md:mb-0">
      <img src="/navbar-logo.webp" alt="logo" className="w-32" />
    </a>
        <div className="block lg:hidden text-[white]">
          <button onClick={toggleDrawer} className="flex items-center px-3 py-2 border rounded border-skin-primary hover:text-skin-primary text-skin-primary hover:border-white">
            <svg className="fill-current h-3 w-3 text-skin-primary" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      </div>
      
    </div>

    <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='!h-full !bg-[#131212] !w-full'
  >
  <div className="z-40 p-4 h-screen overflow-hidden w-[24rem] text-white">
    <button onClick={toggleDrawer} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text- rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
      <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      <span className="sr-only">Close menu</span>
    </button>
    <div className="py-2 gap-10 overflow-y-auto flex-col flex justify-center items-center h-full">
    <a href="/" className="flex title-font font-bold items-center text-white text-xl mr-2 mb-4 md:mb-0">
      <img src="/navbar-logo.webp" alt="logo" className="w-32" />
    </a>
      <ul onClick={toggleDrawer} className="space-y-6 font-bold text-center text-xl">
      <li>

        <a href='/#' className="mr-5 hover:text-gray-300 hover:scale-110">Home</a>
      </li>

      <li>

      <a href='/#tiles' className="mr-5 hover:text-gray-300 hover:scale-110">Games</a>
      </li>
      <li>


      <a href='/#hosting' className="mr-5 hover:text-gray-300 hover:scale-110">Hosting</a>
      </li>
        <li>
      <a href='/#work' className="mr-5 hover:text-gray-300 hover:scale-110">Team</a>     
        </li>
      <li className="relative group">
        <div className="mr-5 hover:text-gray-300">
          <span>Leaderboards</span>
          <div className=" w-full p-4">
            <div className=" flex justify-center items-center">
              <img src="https://res.cloudinary.com/dsbups4jj/image/upload/v1745681011/realms_apufac.png" alt="Realms" className="w-32 h-auto object-contain " />
            </div>
            <a href="/#tiles" className="dropdown-item block py-2 text-gold text-yellow-400">Hall of Fame</a>
            <a href="/#tiles" className="dropdown-item block py-2 text-red-500 hover:text-red-400">Hall of Shame (Bans)</a>
          </div>
        </div>
      </li>
    
      </ul>
     
    </div>
      <div className='relative bottom-0 flex justify-center w-full'>
        <button onClick={() => { setIsVoteModalOpen(true); setIsOpen(false); }} className="mt-3 text-indigo-500 inline-flex">
          <LazyLoadImage
            effect="blur"
            height="auto"
            width="100%"
            src='https://res.cloudinary.com/dsbups4jj/image/upload/v1745680774/cta_vote_xwfykt.png'
            className='w-32'
          />
        </button>
        <VoteModal isOpen={isVoteModalOpen} onClose={() => setIsVoteModalOpen(false)} />
      </div>
  </div>
  </Drawer>
    </header>
  )
}

export default MobileNavbar