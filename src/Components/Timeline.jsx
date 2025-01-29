import React from 'react'
import './timeline.css'

const Timeline = () => {
  return (
    <>
{/* component */}
<section id='milestone' className="bg-[#141414]">

<div className="md:container mx-auto w-full h-full">
<div className='py-10'>

        <h1 class="text-2xl font-semibold text-center text-white capitalize lg:text-5xl ">Milestones
        </h1>

        <p class="mt-4 text-center text-slate-100">
        A journey of how I have evolved to who I am today.
        </p>
</div>

  <div className="relative w-full wrap overflow-hidden p-10 h-full">
    <div className="border-2-2  absolute border-opacity-20 border-white h-full border md:left-[50%]"  />
    {/* right timeline */}
      
    <div className="mb-8 mt-1 flex justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#252A2F] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div class=" px-1 pb-2 text-left md:absolute right-time">
        <span class="block text-xl font-bold text-slate-200" tabIndex={0} role="link">2014-2019</span>
        <span class="text-sm text-slate-300">Learnt, unlearnt and transformed</span>
    </div>
      <div className="w-full px-3 overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className="py-5 px-2 text-left">
    <a href="#" className="block text-xl font-bold text-white" tabIndex={0} role="link">Graduated as a lawyer</a>
    </div>
  <img className="object-cover w-full h-62" src="/timeline/uni.jpeg" alt="avatar" />
  <div className="py-5 text-left">
    <span className="text-sm text-gray-200">Jindal Global university</span>
  </div>
</div>

      </div>
    </div>
    <div className="mb-8 mt-1 flex md:flex-row-reverse justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#252A2F] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div class=" px-1 pb-2 text-left md:absolute left-time">
        <span class="block text-xl font-bold text-slate-200" tabIndex={0} role="link">2019-2021</span>
        <span class="text-sm text-slate-300">Navigating disputes, championing growth</span>
    </div>
      <div className="w-full px-3 overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className="py-5 px-2 text-left">
    <a href="#" className="block text-xl font-bold text-white" tabIndex={0} role="link">Life as a Lawyer</a>
    </div>
  <img className="object-cover w-full h-54 aspect-square" src="/timeline/law.jpg" alt="avatar" />
  <div className="py-5 text-left">
    {/* <span className="text-sm text-gray-700 dark:text-gray-200">Quis qui elit commodo commodo ipsum. Labore culpa enim sint sint. Qui occaecat id ex exercitation eu quis ex eiusmod nisi aliquip sit. Sit do do incididunt anim.</span> */}
  </div>
</div>

      </div>
    </div>
    <div className="mb-8 mt-1 flex justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#252A2F] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div class=" px-1 pb-2 text-left md:absolute right-time">
        <span class="block text-xl font-bold text-slate-200" tabIndex={0} role="link">2021-2023</span>
        <span class="text-sm text-slate-300">My Zero to One Journey</span>
    </div>
      <div className="w-full px-3 overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className="py-5 px-2 text-left">
    <a href="#" className="block text-xl font-bold text-white" tabIndex={0} role="link">Founded Masala Tech F&B LLP</a>
    </div>
  <img className="object-cover w-full h-54 aspect-square" src="/timeline/company.png" alt="avatar" />
  <div className="py-5 text-left">
    {/* <span className="text-sm text-gray-700 dark:text-gray-200">Quis qui elit commodo commodo ipsum. Labore culpa enim sint sint. Qui occaecat id ex exercitation eu quis ex eiusmod nisi aliquip sit. Sit do do incididunt anim.</span> */}
  </div>
</div>

      </div>
    </div>
    <div className="mb-8 mt-1 flex md:flex-row-reverse justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#252A2F] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full ">
        <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div class="px-1 pb-2 text-left md:absolute left2-time">
        <span class="block text-xl font-bold text-slate-200" tabIndex={0} role="link">MBA JOURNEY</span>
        <span class="text-sm text-slate-300">2023-2024</span>
    </div>
      <div className="w-full px-3 overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className="py-5 px-2 text-left">
    <a href="#" className="block text-xl font-bold text-white" tabIndex={0} role="link">The MBA Journey</a>
    </div>
  <img className="object-cover w-full h-62" src="/hero.png" alt="avatar" />
  <div className="py-5 text-left">
    {/* <span className="text-sm text-gray-200">Jindal Global university</span> */}
  </div>
</div>

      </div>
    </div>
  </div>
</div>
</section>


    </>
  )
}

export default Timeline