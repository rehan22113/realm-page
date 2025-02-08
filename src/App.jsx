import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'
import MobileNavbar from './Components/MobileNavbar'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.error("Autoplay failed:", err));
    }
  }, []);

  useEffect(()=>{
      AOS.init()
  })

  const [showTooltip, setShowTooltip] = useState(false);
  const copyText = "client.connect 122.176.96.37:28507";

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };



  return (
    <div className='bg-black'>
      <Navbar />
      <MobileNavbar/>
          <div className=' overflow-hidden relative md:-mt-28'>
        {/* component */}
        <div className="bg-black w-full h-full md:h-min-screen">
          <div className=" m-auto">
            <div className="w-full z-0 relative md:h-[40rem]">
              <div className="w-full h-full relative z-0">
                <video ref={videoRef} className="relative z-[1] inline w-full h-full object-center object-cover" preload="auto" loop playsInline muted autoPlay aria-hidden="false" src="https://res.cloudinary.com/djxzpihss/video/upload/v1738510732/Websites/Glitched%20Realms/4krender.mp4" />
                <video className="absolute top-0 left-0 w-full h-full transform-gpu translate-x-0 translate-y-0 z-0 inline object-center object-cover" preload="none" aria-hidden="false" muted loop playsInline autoPlay src="https://res.cloudinary.com/djxzpihss/video/upload/v1738510732/Websites/Glitched%20Realms/4krender.mp4" />
              </div>
            </div>
          </div>
        </div>

            
        <section id='tiles' className="text-gray-100 bg-[#1F1F1F] body-font">
        <div className="container px-5 md:py-20 py-10 mx-auto flex flex-wrap">
          <div className="lg:w-[90%] w-full mx-auto">
          <div className="flex md:flex-row flex-col lg:gap-0 gap-2 mb-2 -mx-2">

              <div className="px-2 md:w-1/2 w-full 2xl:h-[320px] lg:h-[260px] h-auto group" data-aos="fade-right"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">
                <div className="flex flex-wrap justify-center w-full h-full items-center relative group-hover:border group-hover:rounded-md">
                  <LazyLoadImage
                    
                    effect="blur" 
                    alt="gallery" 
                    height={'100%'} 
                    width={'100%'} 
                    className="object-contain object-center block rounded-lg transition-all"
                    wrapperClassName="w-full h-full group-hover:opacity-10" 
                    src="/tile-1.webp" 
                  />
                  <div className="text-center px-4 absolute z-10 w-full">
                  <div className='justify-start items-center 2xl:h-[300px] lg:h-[220px] h-full relative text-left group-hover:flex hidden gap-3 px-2'>

                <div>
                  <h1 className=' text-xl font-extrabold border-b-2 border-blue-400 inline'>SERVER INFO</h1>
                  <ul className="list-disc list-inside text-white leading-tight mt-2 font-bold lg:text-base text-[10px] ">
                <li>One Block</li>
                <li>Sky Block

</li>
                <li>Bed Wars</li>
                <li>Prison</li>
                <li>PvP</li>
                <li>Active Admins
</li>
                <li>Lag-free Experience</li>
                </ul>

                </div>

      <div className=' absolute bottom-0 md:right-0 -right-2 flex flex-col justify-end items-end'>
      <div className=' relative'>

        <a href='https://shop.glitchedrealms.com/' target="_blank" className="mt-3 text-indigo-500 inline-flex" >
          <LazyLoadImage
             effect="blur"  height="auto"
      width="100%" src='/tiles_btn.png' className=' lg:w-40 w-32' />
        </a>
      </div>
        <p className=' 2xl:text-sm md:text-[10px] -mt-1 hidden lg:block'>Please join manually from console/server list if the link is not working</p>
      </div>
      </div>
                  </div>
                </div>
              </div>
            

              <div className="px-2 md:w-1/2 w-full 2xl:h-[320px] lg:h-[260px] h-auto group" data-aos="fade-left"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1200">
                <div className="flex flex-wrap justify-center w-full h-full items-center relative hover:border rounded-md">
                  <LazyLoadImage
                     effect="blur"  height="100%"
      width="100%" alt="gallery" className="object-contain h-full w-full object-center block rounded-lg transition-all"
      wrapperClassName="w-full h-full group-hover:opacity-10" src="/tile-2.webp" />
                  <div className="text-center px-4 absolute z-10 w-full">
                  <div className='justify-start items-center 2xl:h-[300px] lg:h-[220px] h-full relative text-left group-hover:flex hidden gap-3 px-2'>

      <div>
        <h1 className=' text-xl font-extrabold border-b-2 border-blue-400 inline'>SERVER INFO</h1>
        <ul className="list-disc list-inside text-white leading-tight mt-2 font-bold lg:text-base text-[10px] ">
      <li>One Block</li>
<li>Sky Block</li>
<li>Bed Wars</li>
<li>Prison</li>
<li>PvP</li>
<li>Active Admins</li>
<li>Lag-free Experience
</li>
  
      </ul>

      </div>

      <div className=' absolute bottom-0 md:right-0 -right-2 flex flex-col justify-end items-end'>
        <a href='https://shop.glitchedrealms.com/' target='_blank' className="mt-3 text-indigo-500 inline-flex" >
          <LazyLoadImage
             effect="blur"  height="auto"
      width="100%" src='/tiles_btn.png' className=' lg:w-40 w-32' />
        </a>
          <p className='2xl:text-sm md:text-[10px] hidden lg:block'>Please join manually from console/server list if the link is not working</p>
      </div>
      </div>
                  </div>
                </div>
              </div>
       

            </div>
            <div className="flex md:h-[310px] hover:md:h-[310px] h-auto flex-wrap w-full mb-4 group rounded-lg transition-all justify-center items-center md:py-2 relative" data-aos="fade-up"
     data-aos-easing="ease-in"
     data-aos-offset="100"
     data-aos-duration="1000">
     <div className='relative h-full w-full md:block hidden group-hover:border rounded-lg'>

              <LazyLoadImage
                 effect="blur" height="100%"
      width="100%" alt="gallery" className="md:block !w-full rounded-lg !h-full object-center !transition-all " 
      wrapperClassName="hidden w-full h-full hover:transition-all group-hover:opacity-10 delay-200" src="/tile-3.webp" />
     </div>
     <div className='relative h-full w-full md:hidden block'>

              <LazyLoadImage
                 effect="blur"  height="100%"
      width="100%" alt="gallery" className="md:hidden !w-full !h-full object-center rounded-lg !transition-all " 
      wrapperClassName="block w-full h-full group-hover:opacity-10 delay-200" src="/tiles-mobile-3.webp" />
      </div>
              <div className="md:text-center px-4 absolute z-10 w-full">
                    {/* <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                    <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p> */}
                    <div className='md:justify-start md:items-center h-full relative text-left group-hover:flex hidden gap-3 px-2'>

                      <div>
                        <h1 className=' md:text-xl text-md font-extrabold border-b-2 border-blue-400 inline'>SERVER INFO</h1>
                        <ul className="list-disc list-inside text-white leading-tight mt-2 font-bold md:text-base text-[10px] ">
        <li>X5 Gather Rates on Resources, Components and Food</li>
        <li>X5 Stack Size</li>
        <li>X5 Crafting Speed</li>
        <li>Faster Smelting/Recycling Speed</li>
        <li>Long Days & Short Nights</li>
        <li>Active Admins</li>
        <li>DDoS Protected</li>
        <li>Lag-Free Experience</li>
      </ul>

                      </div>

                      <div className=' absolute -md:bottom-10 -bottom-2 md:right-0 -right-2 flex flex-col justify-end items-end'>

                      <div className=' relative'>

      {showTooltip && (
              <div className="absolute top-full mt-2 left-1/2 w-full transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-md shadow-lg">
                <p> Copied. Paste this on Rust Console to Join.</p>
              </div>
            )}
        <button onClick={handleCopy} className="mt-3 text-indigo-500 inline-flex" >
           <LazyLoadImage
             effect="blur"  height="auto"
      width="100%" src='/plat_now_button.png' className=' md:w-40 w-32' />
        </button>
      </div>
                      
                        {/* <button onClick={handleCopyRust} target='_blank' className="mt-3 text-indigo-500 inline-flex" >
                          <LazyLoadImage
                             effect="blur"  height="auto"
      width="100%" src='/plat_now_button.png' className=' w-40' />
                        </button>
                        <p className=' text-sm'>Please join manually from console/server list if the link is not working</p> */}

                      </div>
                    </div>
                  </div>
            </div>
            
          </div>
        </div>
        </section>

        <section id="work" className="text-gray-600 body-font bg-gray-100">
          <div className="container mx-auto flex md:py-0 py-5 md:pl-5 md:flex-row flex-col items-center md:justify-normal justify-center">
            <div className=" md:w-1/2 flex flex-col md:py-0 py-10 items-center text-center">
              <h1 className="title-font text-center sm:text-4xl text-3xl font-bold mb-4 text-gray-900">
              Join Our Team of Game Enthusiasts
              </h1>
              <p className="mb-8 leading-relaxed">
              Love bringing people together?
              </p>
              <div className="flex justify-center">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfmHa64Lv05yPcZbmF7fG8w_NXLWnaxYI_iBtJiw4fCUQugbA/viewform?usp=sf_link' target='_blank' className="inline-flex text-white bg-[black] border-0 py-2 px-6 focus:outline-none rounded-lg text-md font-bold hover:scale-105 transition-all hover:bg-[#2E7844]">JOIN US</a>
              </div>
            </div>
            <div className=" md:w-1/2 hidden md:block" data-aos="fade-left"
     data-aos-easing="ease-in"
     data-aos-duration="2000">
              <LazyLoadImage
                 effect="blur"  height="auto"
      width="100%" className="object-cover object-center clippy h-[500px] -mb-2" alt="hero" src="/banner-1.webp" />
            </div>
          </div>
        </section>

        <div className=' fixed transition-all hover:mr-0 cursor-pointer -mr-[120px] top-80 right-0 w-48 z-[1111]'>
              <a href='https://discord.gg/nmmr3CHRZJ' target='_blank'>
                <LazyLoadImage
                   effect="blur"  height="auto"
      width="100%" src="/discord.png" alt="annie" className=""/>
              </a>
        </div>

        <div className=' md:block hidden fixed transition-all animated hover:animate-none hover:mt-0 cursor-pointer z-[1111] -mt-[45px] top-0 md:right-4 right-10 w-48'>
              <a href='https://glitchbox.net' target='_blank'>
                <LazyLoadImage
                   effect="blur"  height="auto"
      width="100%" src="/G_BUTTON.png" alt="annie" className=""/>
              </a>
        </div>

          </div>
      <Footer/>
    </div>
  )
}

export default App