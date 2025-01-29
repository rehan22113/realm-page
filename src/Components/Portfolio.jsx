"use client"
import React, { useState,useEffect } from 'react'

const projects=[
  {
    id:1,
    title:"Monetization Features on Paytm Insider",
    detail:"we Identify and generate new sources of revenue leveraging the existing platform offerings Increase the month-on-month growth (user & revenue) ",
    image:'/portfolio/paytm.png',
    link:'https://docs.google.com/presentation/d/1TYYj6od34r6kfHFRDP9_vwkFu10oJKpiT6vGhCMGAJA/edit?usp=sharing',
    category:"product",
  },
  {
    id:2,
    title:"Figma app design",
    detail:"Sit laboris tempor enim dolore dolore magna non.",
    image:'/portfolio/figma.png',
    link:'https://www.figma.com/proto/3MPWABksAJKpeDOS7NWU3i/Masala-Tech-Log-in?page-id=25%3A140&type=design&node-id=25-141&viewport=218%2C218%2C0.71&t=TFxErgqNFV6bg388-1&scaling=scale-down&starting-point-node-id=25%3A141&mode=design',
    category:"wireframe",
  },
  {
    id:3,
    title:"Accelerate Your PM Journey ! Must-See PM Resources Inside",
    detail:"As we continue our journey towards excellence, I am thrilled to share a curated list of invaluable resources that will propel your path to success as a Product Manager",
    image:'/portfolio/news.png',
    link:'https://docs.google.com/document/d/1sHZBGvnREWklPmULaXqKTLdE1O1f6TSJBcQK-g8FhNg/edit?usp=sharing',
    category:"newsletter",
  }
]
 
const Portfolio = () => {
  const [data,setData] = useState(projects)
  const [button,setButton] = useState({
    wireframe:false,
    product:true,
    newsletter:false
  })
  const FilterData = (category)=>{
    const filter = projects.filter((item)=>item.category==category)
    console.log(category,filter)
    setData(filter)
    setButton({wireframe:false,
      product:false,
      newsletter:false,[category]:true})
  }
  useEffect(() => {
    const filter = projects.filter((item)=>item.category=="product")
    setData(filter)
  }, []);
  return (
 <section id='portfolio' className="bg-[#141414]">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-center capitalize lg:text-5xl text-white">My Portfolio</h1>
    <p className="max-w-2xl mx-auto my-6 text-center text-gray-300">
    I believe in getting my hands dirty to build out of the ordinary.
    </p>
    <div className="flex items-center justify-center">
      <div className="flex items-center p-1 md:gap-5 gap-2 rounded-xl">
        <button onClick={()=>{FilterData('wireframe')}} className={`px-4 py-2 text-sm border border-blue-400 font-medium text-white capitalize hover:bg-blue-600 ${button.wireframe && 'bg-blue-600'} md:py-2 rounded-md md:px-6`}>Wireframe</button>
        <button onClick={()=>{FilterData('product')}} className={`px-4 md:py-2 text-sm border border-blue-400 font-medium text-white capitalize hover:bg-blue-600 ${button.product && 'bg-blue-600'} md:py-2 rounded-md md:px-6`}>Product Portfolio</button>
        <button onClick={()=>{FilterData('newsletter')}} className={`px-4 py-2 text-sm border border-blue-400 font-medium text-white capitalize hover:bg-blue-600 ${button.newsletter && 'bg-blue-600'} md:py-2 rounded-md md:px-6`}>Newsletters</button>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 py-10 xl:grid-cols-3">
           {data.map((item)=>(
            <div className=' ' key={item.id}>
            <a href={item.link} target='_blank'>
  <img className="object-fit object-center w-full h-64 lg:h-80 aspect-video" src={item.image} alt={item.image} />
  </a>
  <div className="p-2 rounded-b-md bg-gray-600">
    <h1 className=" text-xl font-semibold text-white">
      {item.title}
    </h1>
    <p className="mt-2 text-gray-400">
      {item.detail}
    </p>
    
  </div>
</div>
           ))}

            </div>
            
  </div>
</section>

  )
}

export default Portfolio