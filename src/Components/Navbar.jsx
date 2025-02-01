import React from 'react'

const Navbar = () => {
  return (
   <header className="text-white !bg-transparent body-font sticky top-0 z-50">
  <div className="container mx-auto flex flex-wrap py-5 px-5 flex-col md:flex-row items-center">
    <a href="/" className="flex title-font font-bold items-center text-white text-xl mr-2 mb-4 md:mb-0">
      <img src="/navbar-logo.png" alt="logo" className="w-32" />
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center uppercase text-sm font-bold justify-center">
      <a href='/#' className="mr-5 hover:text-gray-300 hover:scale-110">Home</a>
      <a href='/#tiles' className="mr-5 hover:text-gray-300 hover:scale-110">Servers</a>
      <a href='/#work' className="mr-5 hover:text-gray-300 hover:scale-110">Work with Us</a>
     
    </nav>
    <div className='flex md:mt-0 mt-2 '>
    
    {/* <a href='mailto:realmsupport@glitchbox.net' target='_blank' className="inline-flex items-center bg-[#D1363A] rounded-full pt-1 pb-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 hover:text-black text-base md:mt-0">Contact us
     
     </a> */}
    </div>
  </div>
</header>

  )
}

export default Navbar