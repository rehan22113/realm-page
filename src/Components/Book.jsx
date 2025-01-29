import React from 'react'

const Book = () => {
  return (
    <section id='book' className="bg-[#141414]">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-3xl font-semibold text-center capitalize lg:text-5xl text-white">Books
    </h1>
    {/* <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
    </p> */}
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
      <div>
        <img className="object-contain w-full rounded-lg" src="/books/1.jpg" alt />
        
      </div>
      <div>
        <img className="object-contain w-full rounded-lg" src="/books/2.jpg" alt />
        
      </div>
      <div>
        <img className="object-contain w-full rounded-lg" src="/books/3.jpg" alt />
        
      </div>
      <div>
        <img className="object-contain w-full rounded-lg" src="/books/4.jpg" alt />
        
      </div>
      <div>
        <img className="object-contain w-full rounded-lg" src="/books/5.jpg" alt />
        
      </div>
      <div>
        <img className="object-contain w-full rounded-lg" src="/books/6.jpg" alt />
        
      </div>
    </div>
  </div>
</section>


  )
}

export default Book